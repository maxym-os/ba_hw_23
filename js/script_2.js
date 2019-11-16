// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
// который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

let number = prompt('Число від 0 до 9?');

if (number == 0) {
	alert(')');
}
else if (number == 1) {
	alert('!');
}
else if (number == 2) {
	alert('@');
}
else if (number == 3) {
	alert('#');
}
else if (number == 4) {
	alert('$');
}
else if (number == 5) {
	alert('%');
}
else if (number == 6) {
	alert('^');
}
else if (number == 7) {
	alert('&');
}
else if (number == 8) {
	alert('*');
}
else if (number == 9) {
	alert('(');
}
else {
	alert ('Потрібно ввести число від 0 до 9 ');
}