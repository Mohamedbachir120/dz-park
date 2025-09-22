import { useAuth } from './../contexts/AuthContext';
import React, { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface LoginFormInputs {
  username: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    setIsSubmitting(true);
    try {
      await login(data.username, data.password);
      toast.success('Connexion réussie !', {
        position: 'top-right',
        autoClose: 3000,
      });
      navigate('/dashboard');
    } catch (error) {
      toast.error('Erreur de connexion. Veuillez vérifier vos identifiants.', {
        position: 'top-right',
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg sm:p-8 lg:max-w-lg">
          <div className="flex flex-col space-y-2 pb-8">
            <h1 className="text-3xl font-bold tracking-tight text-primary">Matar Park</h1>
            <p className="text-gray-500">Connectez-vous à votre compte pour continuer.</p>
          </div>
          <form className="flex flex-col space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-medium text-[#111811]" htmlFor="email">
                 nom d'utilisateur
              </label>
              <input
                className={`form-input rounded-md border ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary`}
                id="username"
                placeholder="username"
                type="text"
                disabled={isSubmitting}
                {...register('username', {
                  required: 'username est requis',
                  minLength: {
                    value: 3,
                    message: 'username invalide',
                  },
                })}
              />
              {errors.username && <p className="text-sm text-red-500">{errors.username.message}</p>}
            </div>
            
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-[#111811]" htmlFor="password">
                  Mot de passe
                </label>
                <a className="text-sm font-medium text-primary hover:underline" href="#">
                  Mot de passe oublié ?
                </a>
              </div>
              <input
                className={`form-input rounded-md border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary`}
                id="password"
                placeholder="Entrez votre mot de passe"
                type="password"
                disabled={isSubmitting}
                {...register('password', {
                  required: 'Le mot de passe est requis',
                  minLength: {
                    value: 6,
                    message: 'Le mot de passe doit contenir au moins 6 caractères',
                  },
                })}
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-auto px-5 py-4 flex-1 bg-primary text-white text-base font-bold leading-normal tracking-wide shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="truncate">
                {isSubmitting ? 'Connexion...' : 'Se connecter'}
              </span>
            </button>
          </form>
        </div>
      </main>
      <ToastContainer />
    </div>
  );
};



// Private Route Wrapper (fixed implementation)
export const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem('authToken');
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

export default LoginForm;