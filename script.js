//1.プロパティーとメソッドの違いをまとめて3つほどメソッドを作ってください。

//プロパティはオブジェクト内にkeyと値となっているvalueが書かれているものです。
//名前と値がセットになっているもの。変数のようなイメージで、属性のこと。

//メソッドはプロパティに代入された関数のことをいいます.
//オブジェクト内にkeyとvalueの部分が関数が書かれているもの。
//オブジェクトの操作をするための道具。

// メソッド
// function click(); function get(); function alert();

//メソッド実装
const fruits = {
  name:"みかん",
  season:"winter",
  place:function() {
  console.log("小田原でよく取れます。");
  }
}
fruits.place()

const singer = {
  name:"稲葉浩志",
  genre:"ロック",
  profile:function() {
  console.log("ロック歌手世界一です");
  }
}
singer.profile()

const flowers = {
  name: "さくら",
  color: "ピンク",
  season: "spring",
  show: function() {
    console.log(flowers.name);
  },
};
flowers.show()


//2.下記の関数を実行してその結果をコンソールに表示してください。(スコープ内に書く方法はだめです。

function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
}
const resultReturn = fruit("リンゴ", "100")
console.log(resultReturn)

//3. 下記の関数を経由して2つの関数を実行するような処理を作ってください。
function addTax(name, price, func) {
  const taxPrice = Math.round(price * 1.10);
  func(name, taxPrice);
}

function vegatablePrice(name,price){
  console.log(name + "の値段は" + price + "円です。");
}

//トマトの税込み価格をコンソールに表示させる処理
addTax("トマト", 100, vegatablePrice);

//玉ねぎの税込み価格をコンソールに表示させる処理
addTax("玉ねぎ", 150, vegatablePrice);