/* https://stackoverflow.com/a/6109105 */
export default function nicetime(current, previous) {

        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;

        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
            return 'Publicado hace ' + Math.round(elapsed / 1000) + " segundos";
        }

        else if (elapsed < msPerHour) {
            return 'Publicado hace ' + Math.round(elapsed / msPerMinute) + " minutos";
        }

        else if (elapsed < msPerDay) {
            return 'Publicado hace ' + Math.round(elapsed / msPerHour) + " horas";
        }

        else if (elapsed < msPerMonth) {
            return 'Publicado hace ' + Math.round(elapsed / msPerDay) + " dias";
        }

        else if (elapsed < msPerYear) {
            return 'Publicado hace ' + Math.round(elapsed / msPerMonth) + " meses";
        }

        else {
            return 'Publicado hace ' + Math.round(elapsed / msPerYear) + " años";
        }
}