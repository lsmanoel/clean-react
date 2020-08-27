import React from 'react'
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <header className={Styles.header}>
        <img src=" data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPMAAADICAMAAAAKlSdjAAAApVBMVEUAAAASJVASJVASJVASJVESJVASJVASJVASJVASJVASJVASJVASJVESJVASJVASJVASJVASJVASJVASJVASJVESJVESJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVESJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVASJVBQ1xbTAAAANnRSTlMA+wbYBBSzGfd2RCCL3OvyPw/grVg3DMmmlbwlhQpKml4zL9DDa+WfcE8p1I97f1MsO2dj77diWGMBAAALn0lEQVR42uyah3LaQBRF76oXECoUUaTQRTOd/f9Py64WVAgpJEzGJDozNvihdvYVyR6joqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLir+Buu18E3W0L/wP9qTZbLncNet4tl4vLdAVAUvBPIjWDybo3a63d9CeDniMwYt/qyr6vDSX8a9iDenKQlP6G7JCy05ZI2ZKtrkRW6A9s/EtYAfFVcJZreTgIp+u679frk17yMXMmsaj5Bglc/CNEs/XFp7QFSO5AdnqbY7zXPUmSPH0cz2q9ubx1JaBJ6WQ6Of0TJT5ef1lhQB09Tvzg2FceTLVjUE+skUGP2CeTPt4eu+6CEXflYBnhe0hxuO5a6YZrFe9OMOTiX2TzZyqqKXdtALMu3hpJX9UVqN31L7WpdJI3KiTftiO8K+NAnvrn7Wx9lPBrSAv5+HFeXybBCG/JbGIpOE0b3WcaVE2MtQUcJke8IWbHA5RN3cVzWL4JwOvN8HakyqoWengWNQjbbylt0iDCav17172Y2Ig08mbSC0pp8yC7+D1iedSk9L2kFx2TNkx5j99lJJ8a9KPzRoNs1lExOso2fp/VereH1xniTdjXVeAg9/EnrOQxoMrv8vSdDIF+fYQ/Y7TWgeEXvAe+B29i4U+JOxE8GW+BN4cSmPhzzASY4y3Qz6eapuAFaN2P8zv8wUhN6n5nrr7mWPNevRPo+OTYk5PSJDFeQ0yGWE4+eaqVTgzMQryK8Agcep/7r9/NEFDrOl6F7qtAEuMzM20Bmw+8jm0NaGn4xIw7gF5v43V4vg50PvPTWH/PvkZ4JS0b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" />
        <h1>dev - Enquetes para Programadores</h1>
      </header>
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Digite o seu e-mail" />
          <span className={Styles.status}>*</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Digite sua senha" />
          <span className={Styles.status}>*</span>
        </div>
        <button className={Styles.submit} type="submit">Entrar</button>
        <span className={Styles.link}>Criar uma conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner}/>
          <span className={Styles.error}>Erro</span>
        </div>
      </form>
      <footer className={Styles.footer}>

      </footer>
    </div>
  )
}

export default Login
