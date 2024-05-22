let currentComment = 1;

function changeComment() {
    document.getElementById(`comment-${currentComment}`).classList.add('hidden');
    currentComment = currentComment === 3 ? 1 : currentComment + 1;
    document.getElementById(`comment-${currentComment}`).classList.remove('hidden');
}

// JavaScript code for comment form
document.addEventListener("DOMContentLoaded", function() {
    const commentForm = document.getElementById("comment-form");

    commentForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get values from form inputs
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const comment = document.getElementById("comment").value;

        // Validate input values (you can add more validation if needed)

        // Clear input fields after submitting
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("comment").value = "";

        // You can perform further actions here, like sending the comment to a server
        // For now, let's just log the values
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Comment:", comment);

        // Optionally, you can display a confirmation message to the user
        alert("Your comment has been submitted!");
    });
});

