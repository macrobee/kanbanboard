# Kanban Board

This project was made for my Junior Front End Developer application at Stellar Personnel. Thank you for this opportunity! 

## Project overview

This project was created using Create-React-App and written in JSX. React Context was used to manage state and TailwindCSS was used to style components. Polyfill for allowing drag and drop interactions on mobile was sourced from https://github.com/Bernardo-Castilho/dragdroptouch . SVG for the trash can icon was sourced by svgrepo.com. Favicon image was drawn on Procreate and converted to a .ico file by https://realfavicongenerator.net/ .

Below are the available features of the app:

Task cards can be dragged and dropped into different containers.

Tasks can be added by typing into the input at the bottom of each container.

Tasks can be removed by dragging and dropping them into the trash icon.

## Future features (if this project were to be expanded upon)

Mobile responsiveness for layout

Editing existing tasks

Adding additional category/containers

Persisting tasks between sessions (LocalStorage or cookies)

Limits on the number of tasks that can be added in each container

Switching the order of tasks. Currently, dragging and dropping cards without moving containers allows the dragged card to be put at the bottom of its current container, but not reordered specifically.