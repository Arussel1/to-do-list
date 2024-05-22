export default function createButton(imageSrc, textContent,className) {
    const button = document.createElement('button');
    const img = document.createElement('img');
    const text = document.createElement('p');
    img.src = imageSrc;
    text.textContent = textContent;
    button.classList.add(className);
    button.appendChild(img);
    button.appendChild(text);
    return button;
}