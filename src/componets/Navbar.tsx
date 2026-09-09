import { useEffect, useRef, useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import ThemeToggle from './Themetoggle';
const links = [{href:'#projects',label:'Projects'},{href:'#about',label:'About'},{href:'#skills',label:'Skills'},{href:'#contact',label:'Contact'}];
const Navbar = () => {
 const [isOpen,setIsOpen] = useState(false);
 const navRef = useRef<HTMLElement>(null);
 const toggleRef = useRef<HTMLButtonElement>(null);
 useEffect(() => {
  if (!isOpen) return;
  const closeOutside = (event:PointerEvent) => { if (!navRef.current?.contains(event.target as Node)) setIsOpen(false); };
  const closeEscape = (event:KeyboardEvent) => { if(event.key==='Escape') { setIsOpen(false); toggleRef.current?.focus(); } };
  const desktop = window.matchMedia('(min-width:768px)');
  const closeDesktop = () => { if(desktop.matches) setIsOpen(false); };
  document.addEventListener('pointerdown',closeOutside); document.addEventListener('keydown',closeEscape); desktop.addEventListener('change',closeDesktop);
  return () => { document.removeEventListener('pointerdown',closeOutside); document.removeEventListener('keydown',closeEscape); desktop.removeEventListener('change',closeDesktop); };
 },[isOpen]);
 return <nav className="site-nav" aria-label="Main navigation" ref={navRef}><div className="container nav-inner">
  <a className="brand" href="#home" onClick={()=>setIsOpen(false)}><span className="brand-mark" aria-hidden="true">KM</span>KingsMind</a>
  <div className="desktop-nav">{links.map(link=><a key={link.href} href={link.href}>{link.label}</a>)}</div>
  <div className="nav-controls"><ThemeToggle /><button ref={toggleRef} className="icon-button menu-toggle" aria-label={isOpen?'Close menu':'Open menu'} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={()=>setIsOpen(!isOpen)}>{isOpen?<IoClose size={22}/>:<IoMenu size={22}/>}</button></div>
 </div>{isOpen && <div className="mobile-nav" id="mobile-navigation">{links.map(link=><a key={link.href} href={link.href} onClick={()=>setIsOpen(false)}>{link.label}</a>)}</div>}</nav>;
};
export default Navbar;