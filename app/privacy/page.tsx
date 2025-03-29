import React from "react";

export default function PrivacyPage() {
  return (
    <div>
      <h1>Política de Privacidad</h1>

      <p>
        En Banquito Scan valoramos tu privacidad. Esta aplicación ha sido
        diseñada para procesar información bancaria de manera segura, rápida y
        totalmente local. A continuación detallamos cómo se maneja tu
        información.
      </p>

      <h2>1. Recolección de datos</h2>
      <p>
        No recopilamos, almacenamos ni enviamos tus datos personales a ningún
        servidor externo. Toda la información que procesas con la app (como
        nombre, RUT, cuenta bancaria, etc.) se mantiene exclusivamente en tu
        dispositivo.
      </p>

      <h2>2. Acceso a la cámara y galería</h2>
      <p>
        Banquito Scan solicita permiso para acceder a la cámara y/o galería de
        tu dispositivo con el único fin de permitirte seleccionar o tomar una
        foto para escanear. Ninguna imagen es subida o compartida sin tu acción
        explícita.
      </p>

      <h2>3. Uso del reconocimiento de texto</h2>
      <p>
        La aplicación utiliza el framework <strong>Vision de Apple</strong> para
        identificar texto en las imágenes. Todo el análisis se realiza
        directamente en el dispositivo, sin conexión con servicios de terceros.
      </p>

      <h2>4. Funcionalidades en línea</h2>
      <p>
        La app no requiere conexión a internet para funcionar. Solo utiliza
        internet cuando decides compartir los datos escaneados a través de apps
        externas como WhatsApp, correo, etc.
      </p>

      <h2>5. Analítica y seguimiento</h2>
      <p>
        Banquito Scan no utiliza ningún sistema de análisis, métricas,
        publicidad ni seguimiento del comportamiento del usuario.
      </p>

      <h2>6. Contacto</h2>
      <p>
        Si tienes preguntas sobre esta política o deseas solicitar algo respecto
        a tus datos, puedes contactar a:{" "}
        <a href="mailto:gaspardolcemascolo@gmail.com">
          gaspardolcemascolo@gmail.com
        </a>
      </p>

      <p>Última actualización: 29 de marzo de 2025</p>
    </div>
  );
}
