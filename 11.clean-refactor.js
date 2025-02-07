import models from '../models'
import { validationResult } from 'express-validator'
import moment from 'moment'

const Restaurant = models.Restaurant
const Order = models.order

deliver = async (req, res) => {
  // the err from validation result
  const err = validationResult(req)
  if (err.errors.length>0) {
    res.status(422).send(err)
  }
  else {
  try {
    const O = await Order.findByPk(req.params.orderId) //the order
    if (!O) {
      res.status(404).send("Order not found")
    }
    else {
      O.deliveredAt=new Date()
      //O.priority=null
      //O.setQuality(moment(o.deliveredAt).diff(moment(o.createdAt), 'minutes')%5)
      let uO = await O.save()

      const current_res_data = await Restaurant.findByPk(O.restaurantId)

      // compute the average service time for current restaurant
      // retrieve orders
      const orders = await current_res_data.getOrders()
      const times_computed = orders.filter(o => o.deliveredAt).map(o => moment(o.deliveredAt).diff(moment(o.createdAt), 'minutes'))
      const tm = times_computed.reduce((acc, serviceTime) => acc + serviceTime, 0) / times_computed.length

      await Restaurant.update({  averageServiceMinutes: tm }, { where: { id: O.restaurantId } })
          uO = await O.reload()
      res.json(uO)
    }


    } catch (err) {
      if (err.name.includes('ValidationError')) {
      res.status(422).send(err)
      } else {

        res.status(500).send(err)
}
}
}
}

export { deliver }