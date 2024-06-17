document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-audio');

    function playAudio() {
        audio.play();
        // Remove event listeners after playing audio to prevent multiple calls
        document.removeEventListener('click', playAudio);
        document.removeEventListener('scroll', playAudio);
    }

    // Add event listeners for user interaction
    document.addEventListener('click', playAudio);
    document.addEventListener('scroll', playAudio);
});