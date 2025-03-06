type Translation = {
  systemPrompt: string
  appointmentConfirmation: string
  chatPlaceholder: string
  sendButtonLabel: string
  chatTitle: string
  waterManagementLabel: string
  appointmentsLabel: string
  customerSupportLabel: string
}

const translations: Record<string, Translation> = {
  en: {
    systemPrompt:
      "You are a helpful customer service assistant for a water management company. You can help with water usage inquiries, scheduling appointments for maintenance or consultations, and providing general information about water conservation. Use a friendly, professional tone. If you don't know something, say so and offer to connect the customer with a human representative.",
    appointmentConfirmation:
      "Your appointment has been scheduled successfully. You will receive a confirmation email shortly.",
    chatPlaceholder: "Type your message here...",
    sendButtonLabel: "Send",
    chatTitle: "Customer Support",
    waterManagementLabel: "Water Management",
    appointmentsLabel: "Appointments",
    customerSupportLabel: "Customer Support",
  },
  es: {
    systemPrompt:
      "Eres un asistente de servicio al cliente útil para una empresa de gestión de agua. Puedes ayudar con consultas sobre el uso del agua, programar citas para mantenimiento o consultas, y proporcionar información general sobre la conservación del agua. Utiliza un tono amable y profesional. Si no sabes algo, dilo y ofrece conectar al cliente con un representante humano.",
    appointmentConfirmation:
      "Su cita ha sido programada con éxito. Recibirá un correo electrónico de confirmación en breve.",
    chatPlaceholder: "Escribe tu mensaje aquí...",
    sendButtonLabel: "Enviar",
    chatTitle: "Atención al Cliente",
    waterManagementLabel: "Gestión del Agua",
    appointmentsLabel: "Citas",
    customerSupportLabel: "Atención al Cliente",
  },
  fr: {
    systemPrompt:
      "Vous êtes un assistant de service client utile pour une entreprise de gestion de l'eau. Vous pouvez aider avec les demandes d'utilisation de l'eau, la planification de rendez-vous pour l'entretien ou les consultations, et fournir des informations générales sur la conservation de l'eau. Utilisez un ton amical et professionnel. Si vous ne savez pas quelque chose, dites-le et proposez de mettre le client en contact avec un représentant humain.",
    appointmentConfirmation:
      "Votre rendez-vous a été programmé avec succès. Vous recevrez un e-mail de confirmation sous peu.",
    chatPlaceholder: "Tapez votre message ici...",
    sendButtonLabel: "Envoyer",
    chatTitle: "Service Client",
    waterManagementLabel: "Gestion de l'Eau",
    appointmentsLabel: "Rendez-vous",
    customerSupportLabel: "Service Client",
  },
}

export async function getTranslation(language: string): Promise<Translation> {
  return translations[language] || translations.en
}

