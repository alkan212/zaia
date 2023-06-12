import { serialize } from 'cookie';

export const countWords = (text) => {
    let splittedText = text.split(" ");
    let count = 0;
    for (let i = 0; i < splittedText.length; i++) {
        if (splittedText[i].length > 1) {
            count += 1
        }
    }
    return count
}

export async function getUser(req, collection) {
    try {
        let token = req.headers.token;
        let user = await collection.findOne({ token: token })
        if (user == null) { return null }
        return user
    } catch (e) {
        return null
    }
}

export function findGetParameter(parameterName) {
    try {
        var result = null,
            tmp = [];
        location.search
            .substr(1)
            .split("&")
            .forEach(function (item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });
        return result;
    } catch (e) {
        return undefined
    }
}

export function splitText(t, maxIteration = 100, withElement = false) {
    let response = [];
    let iterator = 0;
    for (let i = -1; i < t.length; i++) {

        if (i == t.length - 1) {
            let text = t.slice(i - iterator + 1, i + 1).trim();
            response.push({
                "startIndex": i - iterator + 1,
                "endIndex": i,
                "length": text.length,
                "text": text,
                "element": t[i],
            })
        }

        const element = t[i];
        if (iterator > maxIteration) {
            if (element == "." || element == "!" || element == "!") {
                let text = t.slice(i - iterator + 1, i).trim();
                if (withElement == true) { text = text + element }
                if (text.length < 1) { continue }

                response.push({
                    "startIndex": i - iterator + 1,
                    "endIndex": i,
                    "length": text.length,
                    "text": text,
                    "element": element,
                })
                iterator = 0;
            }
        }

        iterator += 1
    }
    return response
}


export function removeQuote(text) {
    if (text.startsWith(`"`)) {
        text = text.slice(1).trim();
    }
    if (text.endsWith(`"`)) {
        text = text.slice(0, -1).trim()
    }
    return text.trim()
}


export async function logUser(res, db, email) {
    const collection = await db.collection("users");
    let user = await collection.findOne({ email: email });
    if (user == null) { return { success: false, error: "Aucun utilisateur trouvé avec cette email" } }

    await res.setHeader('Set-Cookie', [serialize('token', user.token, { path: '/' }), serialize('account', true, { path: '/' })]);
    return { success: true }
}

export function mobileCheck() {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};


export function formatCurrency(number) {
    // Convert the number to a string and split it into integer and decimal parts
    const [integerPart, decimalPart = "00"] = Number(number).toFixed(2).split(".");

    // Add a dot every 3 digits in the integer part
    const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Combine the formatted integer part, decimal part and the Euro symbol
    return `${formattedIntegerPart},${decimalPart}`;
}


export function formatDateFromTimestamp(timestamp) {
    const date = new Date(timestamp);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = date.getDate() + ' ' + months[date.getMonth()] + ' ' + date.getFullYear();

    return formattedDate;
}

export function formatTimeFromTimestampHours(timestamp) {
    const date = new Date(timestamp);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const formattedTime = hours + ':' + minutes;
  
    return formattedTime;
  }

export const LANGUAGES = [
    "allemand",
    "anglais",
    "arabe",
    "arménien",
    "biélorusse",
    "bulgare",
    "catalan",
    "chinois",
    "coréen",
    "corse",
    "croate",
    "danois",
    "espagnole",
    "estonien",
    "finois",
    "francais",
    "géorgien",
    "grec",
    "hongrois",
    "indonésien",
    "irlandais",
    "islandais",
    "italien",
    "japonais",
    "laotien",
    "latin",
    "lituanien",
    "malgache",
    "néerlendais",
    "persan",
    "polonais",
    "portugais",
    "roumain",
    "russe",
    "serbe",
    "slovaque",
    "slovène",
    "suédois",
    "tchèque",
    "thai",
    "turc",
    "ukrainien"
]

export function removeCount(text) {
    return text.trim().replace(/^\d+\.\s*/, '')
}

// list 1 to 10 in one line without creating a function using fill
export function range(from, to) {
    return Array((to + 1) - from).fill().map((_, i) => i + from)
}


export function minutesToHour(minutes) {
    if (minutes <= 50) {
        return `${minutes}m`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes === 0 ? `${hours}h` : `${hours}h${remainingMinutes}`;
}