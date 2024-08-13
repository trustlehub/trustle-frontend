import { Auth0Provider, AppState } from "@auth0/auth0-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthConfigProps {
  children: ReactNode;
}

function Auth0Config({ children }: AuthConfigProps) {
  const navigate = useNavigate();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN as string;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID as string;

  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0Config;
