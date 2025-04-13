const { DateTime } = require('luxon')

module.exports = function(eleventyConfig) {

    // tell to get it css . if eleventy doesnt pass thruough something from src to public. you gotta tell it explicitly to do so.
    eleventyConfig.addPassthroughCopy('./src/style.css')
    eleventyConfig.addPassthroughCopy('./src/assets')
    
    eleventyConfig.addFilter("postDate", (dateObj)=>{
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    })

    return {
        dir:{
            input:"src",
            output:"public"
        }
    }
}