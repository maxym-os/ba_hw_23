// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

let b = prompt('П\'ятизначне число?');

if (b.length == 5) {
	if (b[0] == b[4] && b[1] == b[3]) {
		alert('Паліндром');
	}
	else {
		alert('Не паліндром');
	}
}
else {
	alert('Потрібно ввести п\'ятизначне число');
}