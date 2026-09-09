import { useEffect,useState } from 'react';
import { IoMoonOutline,IoSunnyOutline } from 'react-icons/io5';
const ThemeToggle = () => {
 const [isDark,setIsDark] = useState(()=>document.documentElement.classList.contains('dark'));
 useEffect(()=>{
  document.documentElement.classList.toggle('dark',isDark);
  try { localStorage.setItem('theme',isDark?'dark':'light'); } catch { /* The theme still works when storage is unavailable. */ }
 },[isDark]);
 return <button type="button" className="icon-button" aria-label={isDark?'Switch to light theme':'Switch to dark theme'} onClick={()=>setIsDark(!isDark)}>{isDark?<IoSunnyOutline size={20}/>:<IoMoonOutline size={20}/>}</button>;
};
export default ThemeToggle;