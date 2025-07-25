export const useAuth = () => {
  const supabase = useSupabaseClient();
  const user = useSupabaseUser();

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

    console.log(data.user)
    }
  };

  const login = async (form: { email: string; password: string }) => {
    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });
    if (error) throw error;
  };

  // Logout
  const logout = async () => {
    await supabase.auth.signOut();
  };

  return { user, register, login, logout };
};
