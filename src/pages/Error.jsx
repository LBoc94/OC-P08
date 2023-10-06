import { NavLink } from "react-router-dom";


function Error() {
    return (
        <main id="error-message">
              <span>404</span>
              <div>Oups! La page que vous demandez n'existe pas.</div>
              <NavLink to='/'>Retourner sur la page d'accueil</NavLink>
        </main>
    );
  }

  export default Error