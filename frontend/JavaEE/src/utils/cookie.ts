
export default function getCookieValue(name :string) {

    const cookies = document.cookie.split('; ');

    for (let i = 0; i < cookies.length; i++) {

        const cookie = cookies[i];
        const [cookieName, cookieValue] = cookie.split('=');

        if (cookieName === name) {
        return cookieValue;
        }
    }

    return null;
}

export const setCookie = (name : string , value : string , time=2*60*1000) =>{

    const date = new Date()
    date.setTime(date.getTime() + time)
    const expireTime = "expireTime=" + date.toUTCString() + ";"

    document.cookie = name +"=" + value + ";path=/;" + expireTime;
}
