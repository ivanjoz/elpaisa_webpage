export const parseSVG = (svgContent: string)=> {
  /*
  if(typeof process !== 'undefined' && process.env.NEXT_RUNTIME === 'nodejs'){
    return ""
  }


  console.log(svgContent)

  const decoded = unescape(encodeURIComponent(svgContent))
  const base64String = btoa(decoded)
  */

  // return `data:image/svg+xml;base64,${base64String}`
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgContent)}`
}


export function formatTime(date, mode) {
  let d // Objeto fecha a parsear
  if (!date) { d = new Date() }
  else if (typeof date === "number") {
    // Valida las fechas por dia, segundo o ms;
    if(date < 30000){
      // Si es por día, le agrega 10 horas por desface GTM Perú
      date = date * 1000 * 86400 + 36000000
    }
    else if (date < 180000000000) { date = date * 1000 }
    d = new Date(date)
  }
  else if (typeof date === 'object' && date.constructor === Date) {
    d = date
  }
  else if (typeof date === 'string' && date.length === 8) {
    const year = parseInt(date.substring(0, 4))
    const month = parseInt(date.substring(4, 6)) - 1
    const day = parseInt(date.substring(6, 8))
    d = new Date(year, month, day)
  }
  else if (typeof date === 'string') {
    if (date.includes('T')) date = date.replace('T', ' ')
    if (date.includes('Z') && date.includes('.')) {
      const idx1 = date.lastIndexOf('.')
      date = date.substring(0, idx1)
    }
    const portions = date.split(' ')
    let day = portions[0]

    const regex1 = /[0-9]{1,2}(\.|-|\/)[0-9]{1,2}(\.|-|\/)[0-9]{4}/g
    const regex2 = /[0-9]{4}(\.|-|\/)[0-9]{1,2}(\.|-|\/)[0-9]{1,2}/g
    const r1 = regex1.test(day)
    const r2 = r1 ? undefined : regex2.test(day)

    if (r1 || r2) {
      let parsed
      for (let s of ['/', '-', '.']) {
        if (day.includes(s)) {
          parsed = day.split(s)
          if (r1) parsed.reverse()
          parsed = parsed.join('-')
          parsed += 'T' + (portions[1] || '12:00:00')
          // console.log('creando nueva fecha::',parsed)          
          d = new Date(parsed)
          if (!d.getTime) return
        }
      }
    }
    else { return }
  }

  // Revisa si es una fecha valida
  if (!d || !(d instanceof Date) || !d.getTime) return mode === -1 ? null : ""
  // Obtiene el Día
  const _dia = d.getDate()
  if (isNaN(_dia)) return mode === -1 ? null : ""
  const dia = _dia < 10 ? "0" + _dia : String(_dia)

  // Si la opción es -1 devuelve la fecha
  if (mode === -1) { return d }

  // Obtiene el mes
  const _mes = d.getMonth() + 1
  const mes = _mes < 10 ? "0" + _mes : String(_mes)
  // Obtiene el año
  const fullYear = d.getFullYear()
  const year = String(fullYear).substr(2, 2);

  if (!mode || mode === 1) return dia + "-" + mes + "-" + year
  else if (mode === 4) return fullYear + "-" + mes + "-" + dia
  else if (mode === 29) return dia + "-" + mes
  else if (mode === 34) return dia + "/" + mes
  else if (mode === 30) return dia
  else if (mode === 31) return mes
  else if (mode === 32) return fullYear
  else if (mode === 10) return mes + "-" + fullYear
  else if (mode === 11) return dia + "-" + mes + "-" + fullYear
  else if (mode === 8) return dia + "/" + mes + "/" + fullYear
  else if (mode === 9) return dia + String(mes) + String(fullYear)
  else if (mode === 12) return dia + "." + mes + "." + year

  // Obtiene la hora y minutos
  let hora: string | number = d.getHours()
  if (hora < 10) hora = "0" + hora
  let min: string | number = d.getMinutes()
  if (min < 10) min = "0" + min

  if (mode === 2)
    return dia + "-" + mes + "-" + year + " " + hora + ":" + min
  else if (mode === 3)
    return dia + "-" + mes + "-" + year + " (" + hora + ":" + min + ")"
  else if (mode === 6)
    return dia + "-" + mes + "-" + fullYear + " " + hora + ":" + min
  else if (mode === 28)
    return dia + "/" + mes + " " + hora + ":" + min
  else if (mode === 7)
    return fullYear + "-" + mes + "-" + dia + "_" + hora + "-" + min
  
  // Obtiene los segundos
  let sec: string | number = d.getSeconds()
  if (sec < 10) sec = "0" + sec
  if (mode === 5) return hora + ":" + min + ":" + sec
  else if (mode === 38)
    return dia + "/" + mes + " " + hora + ":" + min + ":" + sec
  else if (mode === 37) return hora + ":" + min
  else if (mode === 26)
    return dia + "-" + mes + "-" + fullYear + " " + hora + ":" + min + ":" + sec
  else if (mode === 27)
    return fullYear + "-" + mes + "-" + dia + "T" + hora + ":" + min + ":" + sec
  else if (mode === 39)
    return dia + "-" + mes + "-" + fullYear + " " + hora + "." + min
  else if (mode === 40)
    return fullYear + "-" + mes + "-" + dia + " " + hora + ":" + min
  else if (mode === 41)
    return dia + "-" + mes + "-" + fullYear + "T" + hora + ":" + min
}
