const showDevMeme = async () => {
    try {
        const response = await fetch('image446886.png');
        if (!response.ok) throw new Error('Картинка не найдена');
        const blob = await response.blob();

        const reader = new FileReader();
        reader.onload = function() {
            const dataUrl = reader.result;

            const cssStyle = `
                background: url('${dataUrl}') no-repeat left bottom;
                background-size: contain;
                font-size: 1px;
                padding-top: 200px;
                padding-left: 300px;
                line-height: 0;
                color: transparent; 
            `;
            
            console.log('%c+', cssStyle);
            console.log('%cАга! Попался, ЕТОГО В ОПЕНСОРС', 'color: #39d353; font-size: 20px; font-weight: bold; font-family: monospace;');
            console.log('%cПопался, теперь все тебе имеют', 'color: #8b949e; font-size: 14px; font-family: monospace;');
        };
        reader.readAsDataURL(blob);
    } catch (error) {}
};
setTimeout(showDevMeme);

const addImageForGoogle = () => {
    const imgForGoogle = document.createElement('img');
    imgForGoogle.src = 'image446886.png';
    imgForGoogle.alt = 'Секретный мем'; 

    imgForGoogle.style.position = 'absolute';
    imgForGoogle.style.width = '1px';
    imgForGoogle.style.height = '1px';
    imgForGoogle.style.opacity = '0';
    imgForGoogle.style.pointerEvents = 'none';
    imgForGoogle.style.overflow = 'hidden';

    document.body.appendChild(imgForGoogle);
};
addImageForGoogle();