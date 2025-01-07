const { prisma } = require("../prisma/prisma-client");

/**
 * @route /api/add
 * @method POST
 * @desc получить
 * @access Public
 */
const add = async (req, res) => {
  const { name, count } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ message: "Заполните все обязательные поля!" });
  }

  try {
    const guest = await prisma.guest.create({
      data: {
        name,
        count,
      },
    });

    return res.status(200).json(guest);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Возникла непредвиденная ошибка на сервере!" });
  }
};

/**
 * @route /api/get
 * @method GET
 * @desc создать предложение
 * @access Public
 */
const get = async (req, res) => {
  try {
    const guests = await prisma.guest.findMany();
    
    return res.status(200).json(guests);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Возникла непредвиденная ошибка на сервере!" });
  }
};

module.exports = {
  add,
  get,
};
