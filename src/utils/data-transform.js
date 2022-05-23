export const processIntentData = ({_id, id, response, carousel}) => {
    if (id === "fallback") return {
        isBot: true,
        sentence: response,
        recommendations: null
    }

    return {
        isBot: true,
        sentence: response,
        recommendations: carousel.map((value) => {
            return {
                title: value.resource_title,
                url: value.resource_url
            }
        })
    }
}

export const processSemanticData = (documents) => {
    if (Array.isArray(documents) && documents.length > 0){
        return {
            isBot: true,
            sentence: documents[0].sentence,
            recommendations: documents.map((document) => {
                return {
                    title: document.title,
                    url: document.url
                }
            })
        }
    }
}