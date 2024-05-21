let currentComment = 1;

        function changeComment() {
            document.getElementById(`comment-${currentComment}`).classList.add('hidden');
            currentComment = currentComment === 3 ? 1 : currentComment + 1;
            document.getElementById(`comment-${currentComment}`).classList.remove('hidden');
        }