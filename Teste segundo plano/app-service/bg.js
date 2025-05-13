import { HeartRate } from '@zos/sensor'

AppService({
  onInit() {
    console.log('BG Service onInit: iniciando sensor HR')
    this.hr = new HeartRate()
    this.hr.onChange(info => {
      console.log(`HR = ${info.bpm} bpm`)
    })
    this.hr.start()
  },
  onDestroy() {
    console.log('BG Service onDestroy: parando sensor HR')
    if (this.hr) this.hr.stop()
  }
})
