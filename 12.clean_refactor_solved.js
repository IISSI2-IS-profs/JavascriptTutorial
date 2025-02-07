import models from '../models'
import { validationResult } from 'express-validator'
import moment from 'moment'

const Restaurant = models.Restaurant
const Order = models.order

/*
  app.route('/orders/:orderId/deliver')
    .patch(
      upload.none(),
      middlewares.isLoggedIn,
      middlewares.hasRole('owner'),
      middlewares.checkEntityExists(Order)  //new middleware
      middlewares.checkOrderOwnership,
      OrderValidation.deliver(),
      middlewares.handleValidationErrors //new middleware
      OrderController.deliver)
*/

deliver = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.orderId)
    order.deliveredAt = new Date()
    const updatedOrder = await order.save()
    res.json(updatedOrder)
    updateRestaurantServiceTime(order.restaurantId)
  } catch (err) {
    res.status(500).send(err)
  }
}

updateRestaurantServiceTime = async (restaurantId) => {
  const restaurant = await Restaurant.findByPk(restaurantId)
  const averageServiceTime = await restaurant.getAverageServiceTime()
  await Restaurant.update({ averageServiceMinutes: averageServiceTime }, { where: { id: restaurantId } })
}

export { deliver }
