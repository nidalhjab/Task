export const formatUsers = (users) => {
    const formatedUsers = [];
    users.forEach(user => {
        let fullName = user.name.first + " " + user.name.last;
        let registration = user.registered.date.split("T");
        let regDate = registration[0];
        let formattedDate = new Date(regDate);
        let dateArr = formattedDate.toDateString().split(" ");
        let month = dateArr[1];
        let day = dateArr[2];
        let year = dateArr[3];
        let fullDate = `${month} ${day}, ${year}`
        let regTime = registration[1].toString();
        let timeArr = regTime.split(":");
        let hour = timeArr[0];
        let minutes = timeArr[1];
        let meridiem = hour > 12 ? "PM" : "AM";
        let fullTime = `${hour > 12 ? hour - 12 : hour}:${minutes} ${meridiem}`
        let userInfo = {
            id: user.id.value,
            gender: user.gender,
            img: user.picture.thumbnail,
            fullName,
            address: user.location.street.name,
            street: user.location.street.number
        }
        let contcatInfo = {
            email: user.email,
            phone: user.phone
        }
        let regInfo = {
            fullDate,
            fullTime
        }
        let natInfo = {
            nat: user.nat,
            country: user.location.country,
            postCode: user.location.postcode
        }
        let tempUser = { userInfo, contcatInfo, regInfo, natInfo }
        formatedUsers.push(tempUser)
    })
    return formatedUsers
}