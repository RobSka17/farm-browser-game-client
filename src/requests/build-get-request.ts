export const buildGetRequest = async (url: string): Promise<Response> => {
    const response = await fetch(url)
    return response.json()
}