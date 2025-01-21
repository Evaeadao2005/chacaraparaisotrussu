exports.handler = async function(event, context) {
    const hour = new Date().getHours();
    let saudacao;

    if (hour >= 6 && hour < 12) {
        saudacao = "Bom dia, gostaria de saber mais informações sobre a Chácara Paraíso Trussu e como posso realizar uma reserva.";
    } else if (hour >= 12 && hour < 18) {
        saudacao = "Boa tarde, estou interessado em alugar a Chácara Paraíso Trussu. Poderiam me passar mais detalhes?";
    } else {
        saudacao = "Boa noite, tenho interesse em saber mais sobre os planos de aluguel da Chácara Paraíso Trussu. Como posso reservar?";
    }

    const whatsappUrl = `https://wa.me/558898136660?text=${encodeURIComponent(saudacao)}`;
    
    return {
        statusCode: 301,  // Código de redirecionamento
        headers: {
            Location: whatsappUrl
        }
    };
};
