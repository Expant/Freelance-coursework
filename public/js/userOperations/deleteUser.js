(() => {
     
  const deleteUser = document.querySelector('#deleteUser');

	deleteUser.addEventListener('click', () => {

		const del = 'Удалить учётную запись';

    let user = JSON.stringify({ del: del });

    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/userProfile', true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.addEventListener('load', () => {
			let userFromServer = JSON.parse(xhr.response);
			if (userFromServer === 'Пользователь удалён') {
        console.log(userFromServer);
        alert('Ваша учётная запись успешно удалена!');
				window.location.replace('/');
			}
    });
    xhr.send(user);
});
})();	
