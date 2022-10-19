

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function  () {

        makeSound(this.innerHTML);
        addAnimations(this.innerHTML);

    })

}
document.addEventListener("keypress", function (event) {

    makeSound(event.key);
    addAnimations(event.key);
})

function makeSound(word) {
    switch (word) {
        case 'w':
            {
                var music = new Audio('/html/drum stick/sounds/tom-1.mp3');
                music.play();
                break;

            }
        case 'a':
            {
                var music = new Audio('/html/drum stick/sounds/tom-2.mp3');
                music.play();
                break;

            }
        case 's':
            {
                var music = new Audio('/html/drum stick/sounds/tom-2.mp3');
                music.play();
                break;

            }
        case 'd':
            {
                var music = new Audio('/html/drum stick/sounds/tom-4.mp3');
                music.play();
                break;

            }

        case 'j':
            {
                var music = new Audio('/html/drum stick/sounds/kick-bass.mp3');

                music.play();
                break;

            }
        case 'k':
            {

                var music = new Audio('/html/drum stick/sounds/crash.mp3');
                music.play();
                break;

            }

        case 'l':
            {
                var music = new Audio('/html/drum stick/sounds/snare.mp3');
                music.play();
                break;

            }

    }
}
function addAnimations(location)
{
 var button=document.querySelector("."+location);
 button.classList.add("pressed");
 setTimeout(function()
 {
    button.classList.remove("pressed")
 },100)

}
