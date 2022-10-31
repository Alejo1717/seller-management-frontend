const getFormattedDate = () => {
    // Create a date from today's date
    var date = new Date();

    // Create a date object from a date string
    // var date = new Date("31 Dec 2022");

    // Get year, month, and day part from the date
    var year = date.toLocaleString("default", { year: "numeric" });
    var month = date.toLocaleString("default", { month: "2-digit" });
    var day = date.toLocaleString("default", { day: "2-digit" });

    // Generate yyyy-mm-dd date string
    var formattedDate = year + "/" + month + "/" + day;
    return formattedDate;
}

export default getFormattedDate;