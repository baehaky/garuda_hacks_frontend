// composables/useAuth.ts
export const useAuth = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser(); // reactive user dari supabase
  const router = useRouter();

  // REGISTER USER
  const register = async (form: {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
  }) => {
    const { data, error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });
    if (error) throw error;

    if (data.user) {
      // Update profile di table "profiles"
      await supabase
        .from("profiles")
        .update({
          first_name: form.first_name,
          last_name: form.last_name,
        })
        .eq("id", data.user.id);
    }
    return data;
  };

  // LOGIN USER
  const login = async (form: { email: string; password: string }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    if (error) throw error;

    if (data.session?.access_token) {
      localStorage.setItem("token", data.session.access_token);
    }

    let profile = null;
    if (data.user?.id) {
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", data.user.id)
        .single();

      if (profileError) {
        console.error("Error fetching profile:", profileError);
      } else {
        profile = profileData;
      }
    }

    return {
      user: data.user,
      session: data.session,
      profile,
    };
  };

  // LOGOUT
  const logout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem("token");
    router.push("/auth/login");
  };

  return { user, register, login, logout };
};
