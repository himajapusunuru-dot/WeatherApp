import wind from './assets/wind.png'
import fog from './assets/fog.png'
import ash from './assets/ash.webp'
import clearsky from './assets/clearsky.png'
import cloudy from './assets/cloudy.png'
import drizzle from './assets/drizzle.png'
import dust from './assets/dust.jpg'
import haze from './assets/haze.jpeg'
import mist from './assets/mist.png'
import rainy from './assets/rainy.png'
import sand from './assets/sand.avif'
import smoke from './assets/smoke.jpeg'
import snow from './assets/snow.png'
import squall from './assets/squall.webp'
import thunderstorm from './assets/thunderstorm.png'
import tornado from './assets/tornado.png'
//background images for all weather types
export const backgroundImage=(weather)=>{
    if(weather=='Thunderstorm')return thunderstorm
    if(weather=='Drizzle')return drizzle
    if(weather=='Rain')return rainy
    if(weather=='Snow')return snow
    if(weather=='Mist')return mist
    if(weather=='Smoke')return smoke
    if(weather=='Haze')return haze
    if(weather=='Dust')return dust
    if(weather=='Fog')return fog
    if(weather=='Sand')return sand
    if(weather=='Ash')return ash
    if(weather=='Squall')return squall
    if(weather=='Tornado')return tornado
    if(weather=='Clear')return clearsky
    if(weather=='Clouds')return cloudy
    return ""
}