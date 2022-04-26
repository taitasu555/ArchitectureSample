handlersはトランスポート(HTTP）を処理し、servicesはドメインとデータアクセスのロジックを管理します。
外部データを扱う各serviceは、そのデータをバリデーションする必要があります

handler
```
const handler = async (req, res) => {
  const { name, email } = req.body

  if (!isValidName(name)) {
    return res.status(httpStatus.BAD_REQUEST).send()
  }

  if (!isValidEmail(email)) {
    return res.status(httpStatus.BAD_REQUEST).send()
  }

  try {
    const user = userService.register(name, email)
    return res.status(httpStatus.CREATED).send(user)
  } catch (err) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send()
  }
}

```


service
```
export async function register(name, email) {
  const user = await userRepository.insert(name, email)

  if (!isPromotionalPeriod()) {
    const promotionalCode = await promotionService.getNewJoinerCode()
    await emailService.sendNewJoinerPromotionEmail(promotionalCode)
  }

  return user
}
```

serviceは独自のドメインエンティティを定義し、storeからのデータをできるだけ早くそれに変換
```
ex product-repository.js
export async function getProduct(id) {
  const product = dbClient.getItem(id)
  return mapToProductEntity(product)
}
```

utilitiesというフォルダがあり、開発者がどこに入れたらいいかわからないような機能をすべて格納
utilitiesフォルダは、理想的には、最小限の労力で他のプロジェクトに持ち運ぶことができるツールボックスであるべきです。もし、その中のロジックがビジネスに特化したものであれば、それはドメインレイヤーの一部であるべきで、単なるユーティリティではないことを意味します。


Snykは、あなたが使っているライブラリにある既知の問題について警告