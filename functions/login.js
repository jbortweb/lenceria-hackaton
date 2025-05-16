export async function handler(event) {
  try {
    console.log("Evento recibido:", event);

    console.log("Headers recibidos:", event.headers);
    console.log("Body recibido:", event.body);

    console.log("Variables de entorno:", {
      user: process.env.PUBLIC_MADUIXA_USER,
      pass: process.env.PUBLIC_MADUIXA_PASSWORD,
    });

    // Validar el método HTTP
    if (event.httpMethod !== "POST") {
      console.log("Método HTTP no permitido:", event.httpMethod);
      return {
        statusCode: 405,
        body: JSON.stringify({ message: "Método no permitido. Usa POST." }),
      };
    }

    // Validar si el cuerpo de la solicitud está vacío
    if (!event.body) {
      console.log("El cuerpo de la solicitud está vacío.");
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "El cuerpo de la solicitud está vacío" }),
      };
    }

    // Intentar analizar el cuerpo de la solicitud
    let parsedBody;
    try {
      parsedBody = JSON.parse(event.body);
    } catch (error) {
      console.error("Error al analizar el cuerpo de la solicitud:", error);
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "El cuerpo de la solicitud no es un JSON válido" }),
      };
    }

    const { username, password } = parsedBody;

    console.log("Credenciales recibidas:", { username, password });

    const validUser = process.env.PUBLIC_MADUIXA_USER;
    const validPass = process.env.PUBLIC_MADUIXA_PASSWORD;

    // Validar credenciales
    if (username === validUser && password === validPass) {
      console.log("Credenciales válidas. Generando token...");
      return {
        statusCode: 200,
        body: JSON.stringify({ token: 'ok' }),
      };
    }

    console.log("Credenciales incorrectas.");
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Credenciales incorrectas' }),
    };
  } catch (error) {
    console.error("Error en la función login:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error interno del servidor" }),
    };
  }
}
