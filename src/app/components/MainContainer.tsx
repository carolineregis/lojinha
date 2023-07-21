import Produto from "./produto";

export default function MainContainer() {
  return(
    <div className="sidebar z-9 absolute z-40 w-36 transition-transform -translate-x-full sm:translate-x-0 row-span-3 grid-cols-3">
    
      <div className='rounded-3xl flex-col items-center h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800/20 sidebar-container'>
        <svg className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-500 flex stroke-1 custom-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#FFFF" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z" stroke="#ffff"></path> <path d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21" stroke="#ffff" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        <svg className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-500 flex stroke-1 custom-icon" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M14,3H4C3.4,3,3,3.4,3,4v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V4C15,3.4,14.6,3,14,3z"></path> <path d="M14,17H4c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V18C15,17.4,14.6,17,14,17z"></path> <path d="M28,3H18c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V4C29,3.4,28.6,3,28,3z"></path> <path d="M28,17H18c-0.6,0-1,0.4-1,1v10c0,0.6,0.4,1,1,1h10c0.6,0,1-0.4,1-1V18C29,17.4,28.6,17,28,17z"></path> </g> </g></svg>
      </div>

      <div className="main-container flex-col">
        <Produto></Produto>
      </div>
    </div>

  )
}