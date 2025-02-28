export const advice = async()=>{
    const fetching = await fetch("https://api.adviceslip.com/advice",{
        method: "GET"
    }
    );
    const response = await fetching.json();
    return response;
}
