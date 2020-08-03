const pers = (num) => {
    num = num.split("*");
    return (Number(num[0]))/100*(Number(num[1]));
}