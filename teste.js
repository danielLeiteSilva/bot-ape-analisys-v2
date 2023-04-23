const request = require('request')
const fs = require('fs')

let geoconding = [
    {
      "latitude": "-23,7226",
      "longitude": "-46,7047"
    },
    {
      "latitude": "-23,6269",
      "longitude": "-46,5981"
    },
    {
      "latitude": "-23,5866",
      "longitude": "-46,7497"
    },
    {
      "latitude": "-23,54",
      "longitude": "-46,6481"
    },
    {
      "latitude": "-23,5332",
      "longitude": "-46,6568"
    },
    {
      "latitude": "-23,5338",
      "longitude": "-46,6558"
    },
    {
      "latitude": "-23,5418",
      "longitude": "-46,6479"
    },
    {
      "latitude": "-23,5399",
      "longitude": "-46,648"
    },
    {
      "latitude": "-23,5322",
      "longitude": "-46,6609"
    },
    {
      "latitude": "-23,5327",
      "longitude": "-46,6578"
    },
    {
      "latitude": "-23,5321",
      "longitude": "-46,6615"
    },
    {
      "latitude": "-23,6246",
      "longitude": "-46,4838"
    },
    {
      "latitude": "-23,532",
      "longitude": "-46,6595"
    },
    {
      "latitude": "-23,5366",
      "longitude": "-46,6506"
    },
    {
      "latitude": "-23,536",
      "longitude": "-46,6516"
    },
    {
      "latitude": "-23,5748",
      "longitude": "-46,5011"
    },
    {
      "latitude": "-23,535",
      "longitude": "-46,5475"
    },
    {
      "latitude": "-23,645",
      "longitude": "-46,6733"
    },
    {
      "latitude": "-23,5541",
      "longitude": "-46,6266"
    },
    {
      "latitude": "-23,6158",
      "longitude": "-46,7153"
    },
    {
      "latitude": "-23,5967",
      "longitude": "-46,6913"
    },
    {
      "latitude": "-23,5945",
      "longitude": "-46,6924"
    },
    {
      "latitude": "-23,5418",
      "longitude": "-46,5804"
    },
    {
      "latitude": "-23,5627",
      "longitude": "-46,6403"
    },
    {
      "latitude": "-23,5567",
      "longitude": "-46,6661"
    },
    {
      "latitude": "-23,5493",
      "longitude": "-46,6423"
    },
    {
      "latitude": "-23,55",
      "longitude": "-46,6432"
    },
    {
      "latitude": "-23,556",
      "longitude": "-46,6386"
    },
    {
      "latitude": "-23,5566",
      "longitude": "-46,6401"
    },
    {
      "latitude": "-23,5548",
      "longitude": "-46,6377"
    },
    {
      "latitude": "-23,6153",
      "longitude": "-46,6991"
    },
    {
      "latitude": "-23,5508",
      "longitude": "-46,6419"
    },
    {
      "latitude": "-23,5893",
      "longitude": "-46,5969"
    },
    {
      "latitude": "-23,5883",
      "longitude": "-46,5953"
    },
    {
      "latitude": "-23,5169",
      "longitude": "-46,7258"
    },
    {
      "latitude": "-23,6335",
      "longitude": "-46,6691"
    },
    {
      "latitude": "-23,5817",
      "longitude": "-46,5945"
    },
    {
      "latitude": "-23,5361",
      "longitude": "-46,6097"
    },
    {
      "latitude": "-23,6228",
      "longitude": "-46,6804"
    },
    {
      "latitude": "-23,5277",
      "longitude": "-46,6735"
    },
    {
      "latitude": "-23,5649",
      "longitude": "-46,5555"
    },
    {
      "latitude": "-23,5525",
      "longitude": "-46,6107"
    },
    {
      "latitude": "-23,5149",
      "longitude": "-46,4558"
    },
    {
      "latitude": "-23,1895",
      "longitude": "-46,8896"
    },
    {
      "latitude": "-23,5877",
      "longitude": "-46,6934"
    },
    {
      "latitude": "-23,571",
      "longitude": "-46,6908"
    },
    {
      "latitude": "-23,5709",
      "longitude": "-46,6903"
    },
    {
      "latitude": "-23,571",
      "longitude": "-46,6911"
    },
    {
      "latitude": "-23,5855",
      "longitude": "-46,6713"
    },
    {
      "latitude": "-23,5455",
      "longitude": "-46,6371"
    },
    {
      "latitude": "-23,5731",
      "longitude": "-46,7041"
    },
    {
      "latitude": "-23,6088",
      "longitude": "-46,443"
    },
    {
      "latitude": "-23,486",
      "longitude": "-46,7302"
    },
    {
      "latitude": "-23,4977",
      "longitude": "-46,6227"
    },
    {
      "latitude": "-23,5583",
      "longitude": "-46,5211"
    },
    {
      "latitude": "-23,446",
      "longitude": "-46,59"
    },
    {
      "latitude": "-23,5555",
      "longitude": "-46,6633"
    },
    {
      "latitude": "-23,5554",
      "longitude": "-46,6676"
    },
    {
      "latitude": "-23,5828",
      "longitude": "-46,686"
    },
    {
      "latitude": "-23,4937",
      "longitude": "-46,5592"
    },
    {
      "latitude": "-23,5377",
      "longitude": "-46,5498"
    },
    {
      "latitude": "-23,5917",
      "longitude": "-46,8335"
    },
    {
      "latitude": "-23,6206",
      "longitude": "-46,6278"
    },
    {
      "latitude": "-23,3736",
      "longitude": "-46,1395"
    },
    {
      "latitude": "-23,5391",
      "longitude": "-46,5693"
    },
    {
      "latitude": "-23,5323",
      "longitude": "-46,5297"
    },
    {
      "latitude": "-23,4981",
      "longitude": "-46,6257"
    },
    {
      "latitude": "-23,5406",
      "longitude": "-46,6434"
    },
    {
      "latitude": "-23,5389",
      "longitude": "-46,6408"
    },
    {
      "latitude": "-23,5389",
      "longitude": "-46,6407"
    },
    {
      "latitude": "-23,5231",
      "longitude": "-46,6489"
    },
    {
      "latitude": "-23,5851",
      "longitude": "-46,5801"
    },
    {
      "latitude": "-23,5428",
      "longitude": "-46,6076"
    },
    {
      "latitude": "-23,4688",
      "longitude": "-46,6566"
    },
    {
      "latitude": "-23,542",
      "longitude": "-46,6322"
    },
    {
      "latitude": "-23,5454",
      "longitude": "-46,6316"
    },
    {
      "latitude": "-23,5479",
      "longitude": "-46,6309"
    },
    {
      "latitude": "-23,5472",
      "longitude": "-46,6316"
    },
    {
      "latitude": "-23,4591",
      "longitude": "-46,6275"
    },
    {
      "latitude": "-23,5796",
      "longitude": "-46,6396"
    },
    {
      "latitude": "-23,5825",
      "longitude": "-46,6376"
    },
    {
      "latitude": "-23,6336",
      "longitude": "-46,705"
    },
    {
      "latitude": "-23,527",
      "longitude": "-46,6841"
    },
    {
      "latitude": "-23,5266",
      "longitude": "-46,6845"
    },
    {
      "latitude": "-23,4429",
      "longitude": "-46,5939"
    },
    {
      "latitude": "-23,5116",
      "longitude": "-46,624"
    },
    {
      "latitude": "-23,5318",
      "longitude": "-46,5803"
    },
    {
      "latitude": "-23,5776",
      "longitude": "-46,6799"
    },
    {
      "latitude": "-23,5289",
      "longitude": "-46,6789"
    },
    {
      "latitude": "-23,5317",
      "longitude": "-46,674"
    },
    {
      "latitude": "-23,5339",
      "longitude": "-46,6652"
    },
    {
      "latitude": "-23,5444",
      "longitude": "-46,5311"
    },
    {
      "latitude": "-23,7052",
      "longitude": "-46,6935"
    },
    {
      "latitude": "-23,5572",
      "longitude": "-46,4991"
    },
    {
      "latitude": "-23,5293",
      "longitude": "-46,6367"
    },
    {
      "latitude": "-23,5795",
      "longitude": "-46,5783"
    },
    {
      "latitude": "-23,5385",
      "longitude": "-46,4562"
    },
    {
      "latitude": "-23,5427",
      "longitude": "-46,4623"
    },
    {
      "latitude": "-23,5281",
      "longitude": "-46,7001"
    },
    {
      "latitude": "-23,516",
      "longitude": "-46,702"
    },
    {
      "latitude": "-23,558",
      "longitude": "-46,6289"
    },
    {
      "latitude": "-23,0205",
      "longitude": "-45,5564"
    },
    {
      "latitude": "-23,5508",
      "longitude": "-46,5972"
    },
    {
      "latitude": "-23,5784",
      "longitude": "-46,6118"
    },
    {
      "latitude": "-23,544",
      "longitude": "-46,5349"
    },
    {
      "latitude": "-23,5467",
      "longitude": "-46,5284"
    },
    {
      "latitude": "-23,5274",
      "longitude": "-46,6684"
    },
    {
      "latitude": "-23,5836",
      "longitude": "-46,678"
    },
    {
      "latitude": "-23,5114",
      "longitude": "-46,7056"
    },
    {
      "latitude": "-23,5419",
      "longitude": "-46,6269"
    },
    {
      "latitude": "-23,5208",
      "longitude": "-46,6549"
    },
    {
      "latitude": "-23,5494",
      "longitude": "-46,589"
    },
    {
      "latitude": "-23,5603",
      "longitude": "-46,6201"
    },
    {
      "latitude": "-23,529",
      "longitude": "-46,64"
    },
    {
      "latitude": "-23,5431",
      "longitude": "-46,5932"
    },
    {
      "latitude": "-23,4614",
      "longitude": "-46,5897"
    },
    {
      "latitude": "-23,546",
      "longitude": "-46,5689"
    },
    {
      "latitude": "-23,5495",
      "longitude": "-46,5849"
    },
    {
      "latitude": "-23,5453",
      "longitude": "-46,5876"
    },
    {
      "latitude": "-23,5217",
      "longitude": "-46,6473"
    },
    {
      "latitude": "-23,5222",
      "longitude": "-46,6489"
    },
    {
      "latitude": "-23,594",
      "longitude": "-46,6443"
    },
    {
      "latitude": "-23,5501",
      "longitude": "-46,6366"
    },
    {
      "latitude": "-23,547",
      "longitude": "-46,5941"
    },
    {
      "latitude": "-23,5129",
      "longitude": "-46,6041"
    },
    {
      "latitude": "-23,5572",
      "longitude": "-46,6286"
    },
    {
      "latitude": "-23,5601",
      "longitude": "-46,6328"
    },
    {
      "latitude": "-23,6472",
      "longitude": "-46,6989"
    },
    {
      "latitude": "-23,5489",
      "longitude": "-46,6382"
    },
    {
      "latitude": "-23,5362",
      "longitude": "-46,6223"
    },
    {
      "latitude": "-23,5435",
      "longitude": "-46,6325"
    },
    {
      "latitude": "-23,5885",
      "longitude": "-46,6927"
    },
    {
      "latitude": "-23,6235",
      "longitude": "-46,6911"
    },
    {
      "latitude": "-23,5377",
      "longitude": "-46,6385"
    },
    {
      "latitude": "-23,5096",
      "longitude": "-46,6741"
    },
    {
      "latitude": "-23,5878",
      "longitude": "-46,7378"
    },
    {
      "latitude": "-23,5188",
      "longitude": "-46,6517"
    },
    {
      "latitude": "-23,5362",
      "longitude": "-45,8493"
    },
    {
      "latitude": "-23,7738",
      "longitude": "-46,721"
    },
    {
      "latitude": "-23,5384",
      "longitude": "-46,6127"
    },
    {
      "latitude": "-23,5343",
      "longitude": "-46,6575"
    },
    {
      "latitude": "-23,5693",
      "longitude": "-46,7072"
    },
    {
      "latitude": "-23,5692",
      "longitude": "-46,7069"
    },
    {
      "latitude": "-23,569",
      "longitude": "-46,7065"
    },
    {
      "latitude": "-23,5682",
      "longitude": "-46,7051"
    },
    {
      "latitude": "-23,5695",
      "longitude": "-46,7072"
    },
    {
      "latitude": "-23,5893",
      "longitude": "-46,6235"
    },
    {
      "latitude": "-23,5278",
      "longitude": "-46,6075"
    },
    {
      "latitude": "-23,5251",
      "longitude": "-46,6345"
    },
    {
      "latitude": "-23,4835",
      "longitude": "-46,3867"
    },
    {
      "latitude": "-23,5128",
      "longitude": "-46,703"
    },
    {
      "latitude": "-23,5121",
      "longitude": "-46,7031"
    },
    {
      "latitude": "-23,5112",
      "longitude": "-46,7028"
    },
    {
      "latitude": "-23,5093",
      "longitude": "-46,7026"
    },
    {
      "latitude": "-23,5093",
      "longitude": "-46,7025"
    },
    {
      "latitude": "-23,5132",
      "longitude": "-46,7032"
    },
    {
      "latitude": "-23,6191",
      "longitude": "-46,6235"
    },
    {
      "latitude": "-23,618",
      "longitude": "-46,6245"
    },
    {
      "latitude": "-23,6208",
      "longitude": "-46,62"
    },
    {
      "latitude": "-23,5316",
      "longitude": "-46,6358"
    },
    {
      "latitude": "-23,5504",
      "longitude": "-46,6371"
    },
    {
      "latitude": "-23,5305",
      "longitude": "-46,556"
    },
    {
      "latitude": "-23,6056",
      "longitude": "-46,5929"
    },
    {
      "latitude": "-23,5196",
      "longitude": "-46,4798"
    },
    {
      "latitude": "-23,5733",
      "longitude": "-46,6411"
    },
    {
      "latitude": "-23,6655",
      "longitude": "-46,7193"
    },
    {
      "latitude": "-23,5271",
      "longitude": "-46,6667"
    },
    {
      "latitude": "-23,5333",
      "longitude": "-46,5358"
    },
    {
      "latitude": "-23,5146",
      "longitude": "-46,6517"
    },
    {
      "latitude": "-23,632",
      "longitude": "-46,7125"
    },
    {
      "latitude": "-23,5682",
      "longitude": "-46,6077"
    },
    {
      "latitude": "-23,5682",
      "longitude": "-46,6076"
    },
    {
      "latitude": "-23,5294",
      "longitude": "-46,6359"
    },
    {
      "latitude": "-23,5223",
      "longitude": "-46,6279"
    },
    {
      "latitude": "-23,5228",
      "longitude": "-46,6273"
    },
    {
      "latitude": "-23,5219",
      "longitude": "-46,6301"
    },
    {
      "latitude": "-23,522",
      "longitude": "-46,6294"
    },
    {
      "latitude": "-23,5718",
      "longitude": "-46,6788"
    },
    {
      "latitude": "-23,5469",
      "longitude": "-46,6011"
    },
    {
      "latitude": "-23,5674",
      "longitude": "-46,6341"
    },
    {
      "latitude": "-23,5371",
      "longitude": "-46,5527"
    },
    {
      "latitude": "-23,536",
      "longitude": "-46,5524"
    },
    {
      "latitude": "-23,5255",
      "longitude": "-46,6255"
    },
    {
      "latitude": "-23,5256",
      "longitude": "-46,6243"
    },
    {
      "latitude": "-23,5923",
      "longitude": "-46,5166"
    },
    {
      "latitude": "-23,5064",
      "longitude": "-46,7096"
    },
    {
      "latitude": "-23,5347",
      "longitude": "-46,626"
    },
    {
      "latitude": "-23,5761",
      "longitude": "-46,6295"
    },
    {
      "latitude": "-23,5743",
      "longitude": "-46,6309"
    },
    {
      "latitude": "-23,5737",
      "longitude": "-46,6308"
    },
    {
      "latitude": "-23,5382",
      "longitude": "-46,4575"
    },
    {
      "latitude": "-23,5599",
      "longitude": "-46,6603"
    },
    {
      "latitude": "-23,5631",
      "longitude": "-46,6636"
    },
    {
      "latitude": "-23,5359",
      "longitude": "-46,4561"
    },
    {
      "latitude": "-23,544",
      "longitude": "-46,5839"
    },
    {
      "latitude": "-23,5452",
      "longitude": "-46,5903"
    },
    {
      "latitude": "-23,5115",
      "longitude": "-46,7475"
    },
    {
      "latitude": "-23,5283",
      "longitude": "-46,6044"
    },
    {
      "latitude": "-23,5385",
      "longitude": "-46,6301"
    },
    {
      "latitude": "-23,5367",
      "longitude": "-46,4567"
    },
    {
      "latitude": "-23,5716",
      "longitude": "-46,6131"
    },
    {
      "latitude": "-23,5554",
      "longitude": "-46,5194"
    },
    {
      "latitude": "-23,5559",
      "longitude": "-46,6751"
    },
    {
      "latitude": "-23,5379",
      "longitude": "-46,6183"
    },
    {
      "latitude": "-23,538",
      "longitude": "-46,6175"
    },
    {
      "latitude": "-23,5958",
      "longitude": "-46,6856"
    },
    {
      "latitude": "-23,5565",
      "longitude": "-46,6176"
    },
    {
      "latitude": "-23,5982",
      "longitude": "-46,6801"
    },
    {
      "latitude": "-23,7202",
      "longitude": "-46,683"
    },
    {
      "latitude": "-23,5199",
      "longitude": "-46,649"
    },
    {
      "latitude": "-23,5207",
      "longitude": "-46,6485"
    },
    {
      "latitude": "-23,5685",
      "longitude": "-46,6266"
    },
    {
      "latitude": "-23,5612",
      "longitude": "-46,6892"
    },
    {
      "latitude": "-23,5248",
      "longitude": "-46,703"
    },
    {
      "latitude": "-23,5474",
      "longitude": "-46,5604"
    },
    {
      "latitude": "-23,5197",
      "longitude": "-46,7228"
    },
    {
      "latitude": "-23,5193",
      "longitude": "-46,7239"
    },
    {
      "latitude": "-23,5383",
      "longitude": "-46,6707"
    },
    {
      "latitude": "-23,5381",
      "longitude": "-46,6222"
    },
    {
      "latitude": "-23,4589",
      "longitude": "-46,7405"
    },
    {
      "latitude": "-23,5922",
      "longitude": "-46,5987"
    },
    {
      "latitude": "-23,6908",
      "longitude": "-46,6862"
    },
    {
      "latitude": "-23,6149",
      "longitude": "-46,692"
    },
    {
      "latitude": "-23,5707",
      "longitude": "-46,672"
    },
    {
      "latitude": "-23,5295",
      "longitude": "-46,7386"
    },
    {
      "latitude": "-23,5295",
      "longitude": "-46,7387"
    },
    {
      "latitude": "-23,5388",
      "longitude": "-46,5668"
    },
    {
      "latitude": "-23,5393",
      "longitude": "-46,5705"
    },
    {
      "latitude": "-23,5374",
      "longitude": "-46,5603"
    },
    {
      "latitude": "-23,5397",
      "longitude": "-46,5724"
    },
    {
      "latitude": "-23,537",
      "longitude": "-46,5583"
    },
    {
      "latitude": "-23,5394",
      "longitude": "-46,5713"
    },
    {
      "latitude": "-23,542",
      "longitude": "-46,5803"
    },
    {
      "latitude": "-23,5358",
      "longitude": "-46,634"
    },
    {
      "latitude": "-23,4511",
      "longitude": "-46,6915"
    },
    {
      "latitude": "-23,5049",
      "longitude": "-46,6757"
    },
    {
      "latitude": "-23,516",
      "longitude": "-46,6346"
    },
    {
      "latitude": "-23,6257",
      "longitude": "-46,7678"
    },
    {
      "latitude": "-23,5229",
      "longitude": "-46,6641"
    },
    {
      "latitude": "-23,6287",
      "longitude": "-46,6239"
    },
    {
      "latitude": "-23,551",
      "longitude": "-46,6412"
    },
    {
      "latitude": "-23,5506",
      "longitude": "-46,6421"
    },
    {
      "latitude": "-23,5788",
      "longitude": "-46,7235"
    },
    {
      "latitude": "-23,5526",
      "longitude": "-46,6379"
    },
    {
      "latitude": "-23,5374",
      "longitude": "-46,6163"
    },
    {
      "latitude": "-23,5457",
      "longitude": "-46,6246"
    },
    {
      "latitude": "-23,5451",
      "longitude": "-46,6234"
    },
    {
      "latitude": "-23,5063",
      "longitude": "-46,6025"
    },
    {
      "latitude": "-23,6304",
      "longitude": "-46,7191"
    },
    {
      "latitude": "-23,4571",
      "longitude": "-46,6002"
    },
    {
      "latitude": "-23,5307",
      "longitude": "-46,4301"
    },
    {
      "latitude": "-23,5831",
      "longitude": "-46,6793"
    },
    {
      "latitude": "-23,4819",
      "longitude": "-46,3822"
    },
    {
      "latitude": "-23,5557",
      "longitude": "-46,6491"
    },
    {
      "latitude": "-23,4761",
      "longitude": "-46,7579"
    },
    {
      "latitude": "-23,7464",
      "longitude": "-46,6849"
    },
    {
      "latitude": "-23,5557",
      "longitude": "-46,6495"
    },
    {
      "latitude": "-23,5499",
      "longitude": "-46,5271"
    },
    {
      "latitude": "-23,5878",
      "longitude": "-46,6004"
    },
    {
      "latitude": "-23,5162",
      "longitude": "-46,63"
    },
    {
      "latitude": "-23,5537",
      "longitude": "-46,5779"
    },
    {
      "latitude": "-23,504",
      "longitude": "-46,6213"
    },
    {
      "latitude": "-23,551",
      "longitude": "-46,6648"
    },
    {
      "latitude": "-23,5749",
      "longitude": "-46,6669"
    },
    {
      "latitude": "-23,566",
      "longitude": "-46,6418"
    },
    {
      "latitude": "-23,7316",
      "longitude": "-46,6893"
    },
    {
      "latitude": "-23,526",
      "longitude": "-46,6269"
    },
    {
      "latitude": "-23,5579",
      "longitude": "-46,6221"
    },
    {
      "latitude": "-23,5566",
      "longitude": "-46,6222"
    },
    {
      "latitude": "-23,5927",
      "longitude": "-46,6012"
    },
    {
      "latitude": "-23,5924",
      "longitude": "-46,5983"
    },
    {
      "latitude": "-23,4498",
      "longitude": "-46,7278"
    },
    {
      "latitude": "-23,5883",
      "longitude": "-46,6806"
    },
    {
      "latitude": "-23,4769",
      "longitude": "-46,4165"
    },
    {
      "latitude": "-23,5295",
      "longitude": "-46,5984"
    },
    {
      "latitude": "-23,5264",
      "longitude": "-46,6711"
    },
    {
      "latitude": "-23,526",
      "longitude": "-46,6713"
    },
    {
      "latitude": "-23,5305",
      "longitude": "-46,6393"
    },
    {
      "latitude": "-23,5204",
      "longitude": "-46,6614"
    },
    {
      "latitude": "-23,6093",
      "longitude": "-46,7518"
    },
    {
      "latitude": "-23,6089",
      "longitude": "-46,7516"
    },
    {
      "latitude": "-23,4947",
      "longitude": "-46,6246"
    },
    {
      "latitude": "-23,5413",
      "longitude": "-46,6112"
    },
    {
      "latitude": "-23,5125",
      "longitude": "-46,6113"
    },
    {
      "latitude": "-23,4768",
      "longitude": "-46,4165"
    },
    {
      "latitude": "-23,5141",
      "longitude": "-46,6082"
    },
    {
      "latitude": "-23,5108",
      "longitude": "-46,612"
    },
    {
      "latitude": "-23,5119",
      "longitude": "-46,6127"
    },
    {
      "latitude": "-23,5157",
      "longitude": "-46,7057"
    },
    {
      "latitude": "-23,5162",
      "longitude": "-46,6987"
    },
    {
      "latitude": "-23,5179",
      "longitude": "-46,7043"
    },
    {
      "latitude": "-23,518",
      "longitude": "-46,7071"
    },
    {
      "latitude": "-23,5178",
      "longitude": "-46,7045"
    },
    {
      "latitude": "-23,5176",
      "longitude": "-46,7069"
    },
    {
      "latitude": "-23,5176",
      "longitude": "-46,7066"
    },
    {
      "latitude": "-23,5176",
      "longitude": "-46,705"
    },
    {
      "latitude": "-23,5069",
      "longitude": "-46,747"
    },
    {
      "latitude": "-23,5266",
      "longitude": "-46,6363"
    },
    {
      "latitude": "-23,5344",
      "longitude": "-46,6477"
    },
    {
      "latitude": "-23,5255",
      "longitude": "-46,6638"
    },
    {
      "latitude": "-23,5236",
      "longitude": "-46,6636"
    },
    {
      "latitude": "-23,4025",
      "longitude": "-46,7446"
    },
    {
      "latitude": "-23,5848",
      "longitude": "-46,6756"
    },
    {
      "latitude": "-23,5858",
      "longitude": "-46,6786"
    },
    {
      "latitude": "-23,5856",
      "longitude": "-46,6782"
    },
    {
      "latitude": "-23,5613",
      "longitude": "-46,6837"
    },
    {
      "latitude": "-23,5976",
      "longitude": "-46,6975"
    },
    {
      "latitude": "-23,5162",
      "longitude": "-46,6059"
    },
    {
      "latitude": "-23,5157",
      "longitude": "-46,6004"
    },
    {
      "latitude": "-23,5146",
      "longitude": "-46,6011"
    },
    {
      "latitude": "-23,5465",
      "longitude": "-46,5978"
    },
    {
      "latitude": "-23,5194",
      "longitude": "-46,7213"
    },
    {
      "latitude": "-23,5153",
      "longitude": "-46,7258"
    },
    {
      "latitude": "-23,5192",
      "longitude": "-46,7233"
    },
    {
      "latitude": "-23,5165",
      "longitude": "-46,7259"
    },
    {
      "latitude": "-23,5167",
      "longitude": "-46,7254"
    },
    {
      "latitude": "-23,5344",
      "longitude": "-46,6247"
    },
    {
      "latitude": "-23,5355",
      "longitude": "-46,6736"
    },
    {
      "latitude": "-23,4627",
      "longitude": "-46,5994"
    },
    {
      "latitude": "-23,5193",
      "longitude": "-46,7063"
    },
    {
      "latitude": "-23,4691",
      "longitude": "-46,6832"
    },
    {
      "latitude": "-23,5265",
      "longitude": "-46,6258"
    },
    {
      "latitude": "-23,5557",
      "longitude": "-46,681"
    },
    {
      "latitude": "-23,5906",
      "longitude": "-46,6683"
    },
    {
      "latitude": "-23,535",
      "longitude": "-46,6246"
    },
    {
      "latitude": "-23,6865",
      "longitude": "-46,7453"
    },
    {
      "latitude": "-23,4082",
      "longitude": "-46,7505"
    },
    {
      "latitude": "-23,4803",
      "longitude": "-46,3825"
    },
    {
      "latitude": "-23,6603",
      "longitude": "-46,7045"
    },
    {
      "latitude": "-23,6601",
      "longitude": "-46,7046"
    },
    {
      "latitude": "-23,5244",
      "longitude": "-46,7021"
    },
    {
      "latitude": "-23,5307",
      "longitude": "-46,6009"
    },
    {
      "latitude": "-23,5224",
      "longitude": "-46,6461"
    },
    {
      "latitude": "-23,522",
      "longitude": "-46,6452"
    },
    {
      "latitude": "-23,5225",
      "longitude": "-46,6466"
    },
    {
      "latitude": "-23,5218",
      "longitude": "-46,6416"
    },
    {
      "latitude": "-23,5231",
      "longitude": "-46,6446"
    },
    {
      "latitude": "-23,4575",
      "longitude": "-46,7438"
    },
    {
      "latitude": "-23,6305",
      "longitude": "-46,7348"
    },
    {
      "latitude": "-23,522",
      "longitude": "-46,6552"
    },
    {
      "latitude": "-23,5466",
      "longitude": "-46,5977"
    },
    {
      "latitude": "-23,5351",
      "longitude": "-46,6247"
    },
    {
      "latitude": "-23,5277",
      "longitude": "-46,7382"
    },
    {
      "latitude": "-23,5852",
      "longitude": "-46,5858"
    },
    {
      "latitude": "-23,5747",
      "longitude": "-46,5676"
    },
    {
      "latitude": "-23,5288",
      "longitude": "-46,6198"
    },
    {
      "latitude": "-23,5373",
      "longitude": "-46,457"
    },
    {
      "latitude": "-23,5137",
      "longitude": "-46,7288"
    },
    {
      "latitude": "-23,5134",
      "longitude": "-46,73"
    },
    {
      "latitude": "-23,5481",
      "longitude": "-46,6085"
    },
    {
      "latitude": "-23,5538",
      "longitude": "-46,5168"
    },
    {
      "latitude": "-23,5079",
      "longitude": "-46,737"
    },
    {
      "latitude": "-23,555",
      "longitude": "-46,5182"
    },
    {
      "latitude": "-23,6052",
      "longitude": "-46,6664"
    },
    {
      "latitude": "-23,5379",
      "longitude": "-46,556"
    },
    {
      "latitude": "-23,5792",
      "longitude": "-46,6939"
    },
    {
      "latitude": "-23,5114",
      "longitude": "-46,7041"
    },
    {
      "latitude": "-23,5345",
      "longitude": "-46,558"
    },
    {
      "latitude": "-23,5753",
      "longitude": "-46,6618"
    },
    {
      "latitude": "-23,5474",
      "longitude": "-46,6073"
    },
    {
      "latitude": "-23,629",
      "longitude": "-46,6979"
    },
    {
      "latitude": "-23,5247",
      "longitude": "-46,5588"
    },
    {
      "latitude": "-23,5358",
      "longitude": "-46,6455"
    },
    {
      "latitude": "-23,5468",
      "longitude": "-46,6888"
    },
    {
      "latitude": "-23,542",
      "longitude": "-46,6962"
    },
    {
      "latitude": "-23,5311",
      "longitude": "-46,7389"
    },
    {
      "latitude": "-23,5548",
      "longitude": "-46,5183"
    },
    {
      "latitude": "-23,6015",
      "longitude": "-46,652"
    },
    {
      "latitude": "-23,5794",
      "longitude": "-46,6828"
    },
    {
      "latitude": "-23,6255",
      "longitude": "-46,6163"
    },
    {
      "latitude": "-23,6033",
      "longitude": "-46,6921"
    },
    {
      "latitude": "-23,6023",
      "longitude": "-46,6954"
    },
    {
      "latitude": "-23,5233",
      "longitude": "-46,6277"
    },
    {
      "latitude": "-23,5231",
      "longitude": "-46,6881"
    },
    {
      "latitude": "-23,5228",
      "longitude": "-46,693"
    },
    {
      "latitude": "-23,5381",
      "longitude": "-46,6424"
    },
    {
      "latitude": "-23,6399",
      "longitude": "-46,5164"
    },
    {
      "latitude": "-23,5982",
      "longitude": "-46,6829"
    },
    {
      "latitude": "-23,5956",
      "longitude": "-46,6876"
    },
    {
      "latitude": "-23,635",
      "longitude": "-46,5964"
    },
    {
      "latitude": "-23,5524",
      "longitude": "-46,6913"
    },
    {
      "latitude": "-23,5418",
      "longitude": "-46,4131"
    },
    {
      "latitude": "-23,459",
      "longitude": "-46,6703"
    },
    {
      "latitude": "-23,57",
      "longitude": "-46,7035"
    },
    {
      "latitude": "-23,5391",
      "longitude": "-46,6439"
    },
    {
      "latitude": "-23,5137",
      "longitude": "-46,5864"
    },
    {
      "latitude": "-23,5451",
      "longitude": "-46,5352"
    },
    {
      "latitude": "-23,5483",
      "longitude": "-46,5282"
    },
    {
      "latitude": "-23,5483",
      "longitude": "-46,5281"
    },
    {
      "latitude": "-23,5376",
      "longitude": "-46,6418"
    },
    {
      "latitude": "-23,5914",
      "longitude": "-46,6013"
    },
    {
      "latitude": "-23,6171",
      "longitude": "-46,63"
    },
    {
      "latitude": "-23,594",
      "longitude": "-46,6896"
    },
    {
      "latitude": "-23,5278",
      "longitude": "-46,5558"
    },
    {
      "latitude": "-23,5276",
      "longitude": "-46,5558"
    },
    {
      "latitude": "-23,5814",
      "longitude": "-46,5764"
    },
    {
      "latitude": "-23,6036",
      "longitude": "-46,6038"
    },
    {
      "latitude": "-23,518",
      "longitude": "-46,6872"
    },
    {
      "latitude": "-23,4075",
      "longitude": "-46,7508"
    },
    {
      "latitude": "-23,4071",
      "longitude": "-46,7509"
    },
    {
      "latitude": "-23,557",
      "longitude": "-46,5118"
    },
    {
      "latitude": "-23,5558",
      "longitude": "-46,4649"
    },
    {
      "latitude": "-23,6114",
      "longitude": "-46,6887"
    },
    {
      "latitude": "-23,6071",
      "longitude": "-46,6949"
    },
    {
      "latitude": "-23,5797",
      "longitude": "-46,5794"
    },
    {
      "latitude": "-23,5068",
      "longitude": "-46,6767"
    },
    {
      "latitude": "-23,6159",
      "longitude": "-46,6096"
    },
    {
      "latitude": "-23,5196",
      "longitude": "-46,6022"
    },
    {
      "latitude": "-23,5028",
      "longitude": "-46,6381"
    },
    {
      "latitude": "-23,5019",
      "longitude": "-46,3735"
    },
    {
      "latitude": "-23,5703",
      "longitude": "-46,6644"
    },
    {
      "latitude": "-23,565",
      "longitude": "-46,6708"
    },
    {
      "latitude": "-23,5628",
      "longitude": "-46,6746"
    },
    {
      "latitude": "-23,5627",
      "longitude": "-46,6744"
    },
    {
      "latitude": "-23,5628",
      "longitude": "-46,6744"
    },
    {
      "latitude": "-23,5628",
      "longitude": "-46,6743"
    },
    {
      "latitude": "-23,5689",
      "longitude": "-46,6662"
    },
    {
      "latitude": "-23,4923",
      "longitude": "-46,4552"
    },
    {
      "latitude": "-23,5151",
      "longitude": "-46,7042"
    },
    {
      "latitude": "-23,5143",
      "longitude": "-46,7038"
    },
    {
      "latitude": "-23,5043",
      "longitude": "-46,6973"
    },
    {
      "latitude": "-23,5906",
      "longitude": "-46,4794"
    },
    {
      "latitude": "-23,465",
      "longitude": "-46,653"
    },
    {
      "latitude": "-23,4974",
      "longitude": "-46,6221"
    },
    {
      "latitude": "-23,5295",
      "longitude": "-46,6291"
    },
    {
      "latitude": "-23,5871",
      "longitude": "-46,5804"
    },
    {
      "latitude": "-23,518",
      "longitude": "-46,6709"
    },
    {
      "latitude": "-23,5308",
      "longitude": "-46,6909"
    },
    {
      "latitude": "-23,5138",
      "longitude": "-46,652"
    },
    {
      "latitude": "-23,5427",
      "longitude": "-46,6539"
    },
    {
      "latitude": "-23,5913",
      "longitude": "-46,6151"
    },
    {
      "latitude": "-23,5915",
      "longitude": "-46,6149"
    },
    {
      "latitude": "-23,634",
      "longitude": "-46,7758"
    },
    {
      "latitude": "-23,5749",
      "longitude": "-46,6647"
    },
    {
      "latitude": "-23,6014",
      "longitude": "-46,6522"
    },
    {
      "latitude": "-23,5483",
      "longitude": "-46,6382"
    },
    {
      "latitude": "-23,5885",
      "longitude": "-46,674"
    },
    {
      "latitude": "-23,5029",
      "longitude": "-46,6318"
    },
    {
      "latitude": "-23,5236",
      "longitude": "-46,6677"
    },
    {
      "latitude": "-23,5239",
      "longitude": "-46,6677"
    },
    {
      "latitude": "-23,5238",
      "longitude": "-46,6662"
    },
    {
      "latitude": "-23,5376",
      "longitude": "-46,4522"
    },
    {
      "latitude": "-23,6035",
      "longitude": "-46,604"
    },
    {
      "latitude": "-23,4938",
      "longitude": "-46,5072"
    },
    {
      "latitude": "-23,5268",
      "longitude": "-46,5567"
    },
    {
      "latitude": "-23,5361",
      "longitude": "-46,657"
    },
    {
      "latitude": "-23,5534",
      "longitude": "-46,5993"
    },
    {
      "latitude": "-23,5516",
      "longitude": "-46,6085"
    },
    {
      "latitude": "-23,5526",
      "longitude": "-46,6073"
    },
    {
      "latitude": "-23,563",
      "longitude": "-46,6864"
    },
    {
      "latitude": "-23,5833",
      "longitude": "-46,6045"
    },
    {
      "latitude": "-23,5171",
      "longitude": "-46,6092"
    },
    {
      "latitude": "-23,5241",
      "longitude": "-46,6441"
    },
    {
      "latitude": "-23,616",
      "longitude": "-46,6651"
    },
    {
      "latitude": "-23,5558",
      "longitude": "-46,5936"
    },
    {
      "latitude": "-23,5208",
      "longitude": "-46,6556"
    },
    {
      "latitude": "-23,5197",
      "longitude": "-46,6556"
    },
    {
      "latitude": "-23,5578",
      "longitude": "-46,518"
    },
    {
      "latitude": "-23,5145",
      "longitude": "-46,611"
    },
    {
      "latitude": "-23,5147",
      "longitude": "-46,6112"
    },
    {
      "latitude": "-23,5844",
      "longitude": "-46,63"
    },
    {
      "latitude": "-23,5921",
      "longitude": "-46,6366"
    },
    {
      "latitude": "-23,5234",
      "longitude": "-46,6273"
    },
    {
      "latitude": "-23,5154",
      "longitude": "-46,7405"
    },
    {
      "latitude": "-23,5888",
      "longitude": "-46,5983"
    },
    {
      "latitude": "-23,589",
      "longitude": "-46,6005"
    },
    {
      "latitude": "-23,5955",
      "longitude": "-46,5976"
    },
    {
      "latitude": "-23,5991",
      "longitude": "-46,6006"
    },
    {
      "latitude": "-23,5526",
      "longitude": "-46,6274"
    },
    {
      "latitude": "-23,5568",
      "longitude": "-46,6296"
    },
    {
      "latitude": "-23,5546",
      "longitude": "-46,6288"
    },
    {
      "latitude": "-23,5565",
      "longitude": "-46,6294"
    },
    {
      "latitude": "-23,554",
      "longitude": "-46,6281"
    },
    {
      "latitude": "-23,5447",
      "longitude": "-46,6255"
    },
    {
      "latitude": "-23,5231",
      "longitude": "-46,6633"
    },
    {
      "latitude": "-23,5234",
      "longitude": "-46,6629"
    },
    {
      "latitude": "-23,5233",
      "longitude": "-46,6628"
    },
    {
      "latitude": "-23,5238",
      "longitude": "-46,6611"
    },
    {
      "latitude": "-23,5254",
      "longitude": "-46,6561"
    },
    {
      "latitude": "-23,5248",
      "longitude": "-46,6581"
    },
    {
      "latitude": "-23,5778",
      "longitude": "-46,593"
    },
    {
      "latitude": "-23,5689",
      "longitude": "-46,6294"
    },
    {
      "latitude": "-23,5539",
      "longitude": "-46,4621"
    },
    {
      "latitude": "-23,6825",
      "longitude": "-46,7122"
    },
    {
      "latitude": "-23,5042",
      "longitude": "-46,6244"
    },
    {
      "latitude": "-23,5041",
      "longitude": "-46,6251"
    },
    {
      "latitude": "-23,6044",
      "longitude": "-46,4995"
    },
    {
      "latitude": "-23,5257",
      "longitude": "-46,6611"
    },
    {
      "latitude": "-23,5568",
      "longitude": "-46,5941"
    },
    {
      "latitude": "-23,5568",
      "longitude": "-46,5942"
    },
    {
      "latitude": "-23,5567",
      "longitude": "-46,5943"
    },
    {
      "latitude": "-23,5603",
      "longitude": "-46,5996"
    },
    {
      "latitude": "-23,5671",
      "longitude": "-46,6161"
    },
    {
      "latitude": "-23,568",
      "longitude": "-46,6116"
    },
    {
      "latitude": "-23,5867",
      "longitude": "-46,6189"
    },
    {
      "latitude": "-23,5271",
      "longitude": "-46,6399"
    },
    {
      "latitude": "-23,6031",
      "longitude": "-46,6673"
    },
    {
      "latitude": "-23,5499",
      "longitude": "-46,6254"
    },
    {
      "latitude": "-23,5457",
      "longitude": "-46,6265"
    },
    {
      "latitude": "-23,5497",
      "longitude": "-46,6254"
    },
    {
      "latitude": "-23,5477",
      "longitude": "-46,6259"
    },
    {
      "latitude": "-23,5512",
      "longitude": "-46,625"
    },
    {
      "latitude": "-23,5505",
      "longitude": "-46,625"
    },
    {
      "latitude": "-23,5504",
      "longitude": "-46,6251"
    },
    {
      "latitude": "-23,5501",
      "longitude": "-46,6253"
    },
    {
      "latitude": "-23,5456",
      "longitude": "-46,6264"
    },
    {
      "latitude": "-23,5491",
      "longitude": "-46,6257"
    },
    {
      "latitude": "-23,5194",
      "longitude": "-46,7484"
    },
    {
      "latitude": "-23,5194",
      "longitude": "-46,7485"
    },
    {
      "latitude": "-23,5526",
      "longitude": "-46,6557"
    },
    {
      "latitude": "-23,5372",
      "longitude": "-46,6281"
    },
    {
      "latitude": "-23,54",
      "longitude": "-46,6296"
    },
    {
      "latitude": "-23,5393",
      "longitude": "-46,629"
    },
    {
      "latitude": "-23,5401",
      "longitude": "-46,6294"
    },
    {
      "latitude": "-23,538",
      "longitude": "-46,6285"
    },
    {
      "latitude": "-23,625",
      "longitude": "-46,6105"
    },
    {
      "latitude": "-23,6256",
      "longitude": "-46,6151"
    },
    {
      "latitude": "-23,5555",
      "longitude": "-46,6172"
    },
    {
      "latitude": "-23,5149",
      "longitude": "-46,5876"
    },
    {
      "latitude": "-23,5364",
      "longitude": "-46,4575"
    },
    {
      "latitude": "-23,8916",
      "longitude": "-46,4244"
    },
    {
      "latitude": "-23,5257",
      "longitude": "-46,6541"
    },
    {
      "latitude": "-23,5505",
      "longitude": "-46,6354"
    },
    {
      "latitude": "-23,6651",
      "longitude": "-46,7065"
    },
    {
      "latitude": "-23,5576",
      "longitude": "-46,5127"
    },
    {
      "latitude": "-23,5997",
      "longitude": "-46,5518"
    },
    {
      "latitude": "-23,6075",
      "longitude": "-46,5443"
    },
    {
      "latitude": "-23,606",
      "longitude": "-46,5435"
    },
    {
      "latitude": "-23,6047",
      "longitude": "-46,5428"
    },
    {
      "latitude": "-23,4572",
      "longitude": "-46,6153"
    },
    {
      "latitude": "-23,526",
      "longitude": "-46,6961"
    },
    {
      "latitude": "-23,5335",
      "longitude": "-46,6594"
    },
    {
      "latitude": "-23,5582",
      "longitude": "-46,6329"
    },
    {
      "latitude": "-23,5595",
      "longitude": "-46,6329"
    },
    {
      "latitude": "-23,5587",
      "longitude": "-46,633"
    },
    {
      "latitude": "-23,4555",
      "longitude": "-46,6172"
    },
    {
      "latitude": "-23,5912",
      "longitude": "-46,6779"
    },
    {
      "latitude": "-23,489",
      "longitude": "-46,3915"
    },
    {
      "latitude": "-23,4893",
      "longitude": "-46,3913"
    },
    {
      "latitude": "-23,525",
      "longitude": "-46,694"
    },
    {
      "latitude": "-23,5876",
      "longitude": "-46,5983"
    },
    {
      "latitude": "-23,5875",
      "longitude": "-46,7021"
    },
    {
      "latitude": "-23,5851",
      "longitude": "-46,6055"
    },
    {
      "latitude": "-23,5092",
      "longitude": "-46,5991"
    },
    {
      "latitude": "-23,5091",
      "longitude": "-46,5993"
    },
    {
      "latitude": "-23,6255",
      "longitude": "-46,6975"
    },
    {
      "latitude": "-23,5407",
      "longitude": "-46,7027"
    },
    {
      "latitude": "-23,5129",
      "longitude": "-46,6256"
    },
    {
      "latitude": "-23,5112",
      "longitude": "-46,6103"
    },
    {
      "latitude": "-23,5094",
      "longitude": "-46,61"
    },
    {
      "latitude": "-23,5093",
      "longitude": "-46,61"
    },
    {
      "latitude": "-23,5082",
      "longitude": "-46,6123"
    },
    {
      "latitude": "-23,5114",
      "longitude": "-46,6104"
    },
    {
      "latitude": "-23,5115",
      "longitude": "-46,6104"
    },
    {
      "latitude": "-23,51",
      "longitude": "-46,6098"
    },
    {
      "latitude": "-23,5053",
      "longitude": "-46,6742"
    },
    {
      "latitude": "-23,5139",
      "longitude": "-46,624"
    },
    {
      "latitude": "-23,4964",
      "longitude": "-46,4231"
    },
    {
      "latitude": "-23,5445",
      "longitude": "-46,6305"
    },
    {
      "latitude": "-23,4811",
      "longitude": "-46,3804"
    },
    {
      "latitude": "-23,5985",
      "longitude": "-46,6799"
    },
    {
      "latitude": "-23,5287",
      "longitude": "-46,6216"
    },
    {
      "latitude": "-23,55",
      "longitude": "-46,6221"
    },
    {
      "latitude": "-23,5379",
      "longitude": "-46,5497"
    },
    {
      "latitude": "-23,5466",
      "longitude": "-46,5305"
    },
    {
      "latitude": "-23,5414",
      "longitude": "-46,6711"
    },
    {
      "latitude": "-23,5653",
      "longitude": "-46,6933"
    },
    {
      "latitude": "-23,5079",
      "longitude": "-46,6578"
    },
    {
      "latitude": "-23,4799",
      "longitude": "-46,3811"
    },
    {
      "latitude": "-23,482",
      "longitude": "-46,3801"
    },
    {
      "latitude": "-23,4796",
      "longitude": "-46,3812"
    },
    {
      "latitude": "-23,4819",
      "longitude": "-46,3801"
    },
    {
      "latitude": "-23,5413",
      "longitude": "-46,6349"
    },
    {
      "latitude": "-23,5818",
      "longitude": "-46,5918"
    },
    {
      "latitude": "-23,5714",
      "longitude": "-46,6659"
    },
    {
      "latitude": "-23,5729",
      "longitude": "-46,6681"
    },
    {
      "latitude": "-23,572",
      "longitude": "-46,6667"
    },
    {
      "latitude": "-23,4625",
      "longitude": "-46,6024"
    },
    {
      "latitude": "-23,5962",
      "longitude": "-46,7431"
    },
    {
      "latitude": "-23,5691",
      "longitude": "-46,708"
    },
    {
      "latitude": "-23,5721",
      "longitude": "-46,7096"
    },
    {
      "latitude": "-23,5698",
      "longitude": "-46,7089"
    },
    {
      "latitude": "-23,4614",
      "longitude": "-46,6041"
    },
    {
      "latitude": "-23,5495",
      "longitude": "-46,6484"
    },
    {
      "latitude": "-23,5482",
      "longitude": "-46,6492"
    },
    {
      "latitude": "-23,4823",
      "longitude": "-46,3825"
    },
    {
      "latitude": "-23,4885",
      "longitude": "-46,7546"
    },
    {
      "latitude": "-23,5253",
      "longitude": "-46,7158"
    },
    {
      "latitude": "-23,5379",
      "longitude": "-46,6346"
    },
    {
      "latitude": "-23,5373",
      "longitude": "-46,6345"
    },
    {
      "latitude": "-23,5393",
      "longitude": "-46,6351"
    },
    {
      "latitude": "-23,5866",
      "longitude": "-46,6036"
    },
    {
      "latitude": "-23,5862",
      "longitude": "-46,6871"
    },
    {
      "latitude": "-23,5876",
      "longitude": "-46,6868"
    },
    {
      "latitude": "-23,5428",
      "longitude": "-46,6066"
    },
    {
      "latitude": "-23,5524",
      "longitude": "-46,5998"
    },
    {
      "latitude": "-23,5526",
      "longitude": "-46,5991"
    },
    {
      "latitude": "-23,5354",
      "longitude": "-46,6107"
    },
    {
      "latitude": "-23,5145",
      "longitude": "-46,6504"
    },
    {
      "latitude": "-23,5137",
      "longitude": "-46,6505"
    },
    {
      "latitude": "-23,4611",
      "longitude": "-46,6524"
    },
    {
      "latitude": "-23,4612",
      "longitude": "-46,6524"
    },
    {
      "latitude": "-23,4613",
      "longitude": "-46,6524"
    },
    {
      "latitude": "-23,527",
      "longitude": "-46,684"
    },
    {
      "latitude": "-23,5823",
      "longitude": "-46,5991"
    },
    {
      "latitude": "-23,5197",
      "longitude": "-46,6547"
    },
    {
      "latitude": "-23,5583",
      "longitude": "-46,6179"
    },
    {
      "latitude": "-23,5582",
      "longitude": "-46,632"
    },
    {
      "latitude": "-23,5373",
      "longitude": "-46,6465"
    },
    {
      "latitude": "-23,5575",
      "longitude": "-46,6074"
    },
    {
      "latitude": "-23,5178",
      "longitude": "-46,6894"
    },
    {
      "latitude": "-23,5439",
      "longitude": "-46,533"
    },
    {
      "latitude": "-23,5859",
      "longitude": "-46,6075"
    },
    {
      "latitude": "-23,5715",
      "longitude": "-46,666"
    },
    {
      "latitude": "-23,5711",
      "longitude": "-46,6687"
    },
    {
      "latitude": "-23,5714",
      "longitude": "-46,6667"
    },
    {
      "latitude": "-23,5263",
      "longitude": "-46,603"
    },
    {
      "latitude": "-23,4066",
      "longitude": "-46,7505"
    },
    {
      "latitude": "-23,4069",
      "longitude": "-46,7503"
    },
    {
      "latitude": "-23,459",
      "longitude": "-46,6045"
    },
    {
      "latitude": "-23,5439",
      "longitude": "-46,6455"
    },
    {
      "latitude": "-23,585",
      "longitude": "-46,6695"
    },
    {
      "latitude": "-23,468",
      "longitude": "-46,5887"
    },
    {
      "latitude": "-23,5598",
      "longitude": "-46,6872"
    },
    {
      "latitude": "-23,5775",
      "longitude": "-46,6782"
    },
    {
      "latitude": "-23,5575",
      "longitude": "-46,663"
    },
    {
      "latitude": "-23,5146",
      "longitude": "-46,7175"
    },
    {
      "latitude": "-23,5026",
      "longitude": "-46,686"
    },
    {
      "latitude": "-23,5022",
      "longitude": "-46,6862"
    },
    {
      "latitude": "-23,503",
      "longitude": "-46,6857"
    },
    {
      "latitude": "-23,5034",
      "longitude": "-46,6856"
    },
    {
      "latitude": "-23,5214",
      "longitude": "-46,64"
    },
    {
      "latitude": "-23,524",
      "longitude": "-46,6438"
    },
    {
      "latitude": "-23,5218",
      "longitude": "-46,639"
    },
    {
      "latitude": "-23,5196",
      "longitude": "-46,6565"
    },
    {
      "latitude": "-23,5445",
      "longitude": "-46,5376"
    },
    {
      "latitude": "-23,5431",
      "longitude": "-46,5369"
    },
    {
      "latitude": "-23,6189",
      "longitude": "-46,6952"
    },
    {
      "latitude": "-23,6232",
      "longitude": "-46,4873"
    },
    {
      "latitude": "-23,5966",
      "longitude": "-46,5909"
    },
    {
      "latitude": "-23,5442",
      "longitude": "-46,5281"
    },
    {
      "latitude": "-23,5991",
      "longitude": "-46,7261"
    },
    {
      "latitude": "-23,6688",
      "longitude": "-46,7172"
    },
    {
      "latitude": "-23,5507",
      "longitude": "-46,5257"
    },
    {
      "latitude": "-23,5277",
      "longitude": "-46,5612"
    },
    {
      "latitude": "-23,5271",
      "longitude": "-46,5617"
    },
    {
      "latitude": "-23,4821",
      "longitude": "-46,4996"
    },
    {
      "latitude": "-23,5949",
      "longitude": "-46,61"
    },
    {
      "latitude": "-23,4882",
      "longitude": "-46,394"
    },
    {
      "latitude": "-23,5831",
      "longitude": "-46,6853"
    },
    {
      "latitude": "-23,5728",
      "longitude": "-46,6267"
    },
    {
      "latitude": "-23,6912",
      "longitude": "-46,7719"
    },
    {
      "latitude": "-23,5105",
      "longitude": "-46,7048"
    },
    {
      "latitude": "-23,5544",
      "longitude": "-46,6257"
    },
    {
      "latitude": "-23,543",
      "longitude": "-46,5567"
    },
    {
      "latitude": "-23,5563",
      "longitude": "-46,6583"
    },
    {
      "latitude": "-23,5787",
      "longitude": "-46,6661"
    },
    {
      "latitude": "-23,524",
      "longitude": "-46,6452"
    },
    {
      "latitude": "-23,5285",
      "longitude": "-46,7509"
    },
    {
      "latitude": "-23,4625",
      "longitude": "-46,6023"
    },
    {
      "latitude": "-23,4821",
      "longitude": "-46,3833"
    },
    {
      "latitude": "-23,6634",
      "longitude": "-46,72"
    },
    {
      "latitude": "-23,5277",
      "longitude": "-46,7504"
    },
    {
      "latitude": "-23,5792",
      "longitude": "-46,4946"
    },
    {
      "latitude": "-23,5813",
      "longitude": "-46,4945"
    },
    {
      "latitude": "-23,5834",
      "longitude": "-46,5788"
    },
    {
      "latitude": "-23,5795",
      "longitude": "-46,5809"
    },
    {
      "latitude": "-23,5392",
      "longitude": "-46,4549"
    },
    {
      "latitude": "-23,638",
      "longitude": "-46,6908"
    },
    {
      "latitude": "-23,4895",
      "longitude": "-46,394"
    },
    {
      "latitude": "-23,5813",
      "longitude": "-46,6833"
    },
    {
      "latitude": "-23,6663",
      "longitude": "-46,7298"
    },
    {
      "latitude": "-23,6208",
      "longitude": "-46,7625"
    },
    {
      "latitude": "-23,4553",
      "longitude": "-46,6173"
    },
    {
      "latitude": "-23,5447",
      "longitude": "-46,6479"
    },
    {
      "latitude": "-23,5319",
      "longitude": "-46,5361"
    },
    {
      "latitude": "-23,6077",
      "longitude": "-46,7516"
    },
    {
      "latitude": "-23,6109",
      "longitude": "-46,7529"
    },
    {
      "latitude": "-23,6112",
      "longitude": "-46,7533"
    },
    {
      "latitude": "-23,5488",
      "longitude": "-46,6398"
    },
    {
      "latitude": "-23,5657",
      "longitude": "-46,7118"
    },
    {
      "latitude": "-23,5703",
      "longitude": "-46,7116"
    },
    {
      "latitude": "-23,579",
      "longitude": "-46,708"
    },
    {
      "latitude": "-23,58",
      "longitude": "-46,7059"
    },
    {
      "latitude": "-23,5063",
      "longitude": "-46,6249"
    },
    {
      "latitude": "-23,5062",
      "longitude": "-46,6252"
    },
    {
      "latitude": "-23,5597",
      "longitude": "-46,4367"
    },
    {
      "latitude": "-23,5861",
      "longitude": "-46,6042"
    },
    {
      "latitude": "-23,5586",
      "longitude": "-46,5138"
    },
    {
      "latitude": "-23,5574",
      "longitude": "-46,5129"
    },
    {
      "latitude": "-23,5222",
      "longitude": "-46,6395"
    },
    {
      "latitude": "-23,6409",
      "longitude": "-46,7225"
    },
    {
      "latitude": "-23,5741",
      "longitude": "-46,6446"
    },
    {
      "latitude": "-23,5507",
      "longitude": "-46,6861"
    },
    {
      "latitude": "-23,5517",
      "longitude": "-46,6856"
    },
    {
      "latitude": "-23,5529",
      "longitude": "-46,6854"
    },
    {
      "latitude": "-23,5428",
      "longitude": "-46,632"
    },
    {
      "latitude": "-23,6105",
      "longitude": "-46,6035"
    },
    {
      "latitude": "-23,6098",
      "longitude": "-46,6066"
    },
    {
      "latitude": "-23,5626",
      "longitude": "-46,4191"
    },
    {
      "latitude": "-23,5279",
      "longitude": "-46,6826"
    },
    {
      "latitude": "-23,5411",
      "longitude": "-46,4591"
    },
    {
      "latitude": "-23,4905",
      "longitude": "-46,4077"
    },
    {
      "latitude": "-23,5553",
      "longitude": "-46,4534"
    },
    {
      "latitude": "-23,5447",
      "longitude": "-46,6466"
    },
    {
      "latitude": "-23,5223",
      "longitude": "-46,628"
    },
    {
      "latitude": "-23,5356",
      "longitude": "-46,6263"
    },
    {
      "latitude": "-23,5279",
      "longitude": "-46,6804"
    },
    {
      "latitude": "-23,5369",
      "longitude": "-46,4568"
    },
    {
      "latitude": "-23,5231",
      "longitude": "-46,6549"
    },
    {
      "latitude": "-23,5158",
      "longitude": "-46,6965"
    },
    {
      "latitude": "-23,5389",
      "longitude": "-46,5679"
    },
    {
      "latitude": "-23,5479",
      "longitude": "-46,6432"
    },
    {
      "latitude": "-23,4585",
      "longitude": "-46,6077"
    },
    {
      "latitude": "-23,4983",
      "longitude": "-46,4068"
    },
    {
      "latitude": "-23,5073",
      "longitude": "-46,6802"
    },
    {
      "latitude": "-23,6075",
      "longitude": "-46,7096"
    },
    {
      "latitude": "-23,6099",
      "longitude": "-46,4913"
    },
    {
      "latitude": "-23,6582",
      "longitude": "-46,7025"
    },
    {
      "latitude": "-23,5377",
      "longitude": "-46,4563"
    },
    {
      "latitude": "-23,4061",
      "longitude": "-46,7621"
    },
    {
      "latitude": "-23,5103",
      "longitude": "-46,6938"
    },
    {
      "latitude": "-23,5422",
      "longitude": "-46,411"
    },
    {
      "latitude": "-23,563",
      "longitude": "-46,4189"
    },
    {
      "latitude": "-23,5419",
      "longitude": "-46,4824"
    },
    {
      "latitude": "-23,5398",
      "longitude": "-46,4854"
    },
    {
      "latitude": "-23,6905",
      "longitude": "-46,6751"
    },
    {
      "latitude": "-23,5226",
      "longitude": "-46,6555"
    },
    {
      "latitude": "-23,5405",
      "longitude": "-46,6295"
    },
    {
      "latitude": "-23,5372",
      "longitude": "-46,4578"
    },
    {
      "latitude": "-23,5073",
      "longitude": "-46,6034"
    },
    {
      "latitude": "-23,5097",
      "longitude": "-46,5988"
    },
    {
      "latitude": "-23,5087",
      "longitude": "-46,6114"
    },
    {
      "latitude": "-23,5131",
      "longitude": "-46,6251"
    },
    {
      "latitude": "-23,4876",
      "longitude": "-46,4552"
    },
    {
      "latitude": "-23,5117",
      "longitude": "-46,6936"
    },
    {
      "latitude": "-23,6599",
      "longitude": "-46,7116"
    },
    {
      "latitude": "-23,4068",
      "longitude": "-46,7502"
    },
    {
      "latitude": "-23,5394",
      "longitude": "-46,4835"
    },
    {
      "latitude": "-23,6141",
      "longitude": "-46,5308"
    },
    {
      "latitude": "-23,613",
      "longitude": "-46,5294"
    },
    {
      "latitude": "-23,6145",
      "longitude": "-46,699"
    },
    {
      "latitude": "-23,6876",
      "longitude": "-46,6959"
    },
    {
      "latitude": "-23,6444",
      "longitude": "-46,7027"
    },
    {
      "latitude": "-23,4517",
      "longitude": "-46,7458"
    },
    {
      "latitude": "-23,5206",
      "longitude": "-46,7482"
    },
    {
      "latitude": "-23,6707",
      "longitude": "-46,7132"
    },
    {
      "latitude": "-23,6669",
      "longitude": "-46,724"
    },
    {
      "latitude": "-23,5182",
      "longitude": "-46,6299"
    },
    {
      "latitude": "-23,5715",
      "longitude": "-46,7002"
    },
    {
      "latitude": "-23,5186",
      "longitude": "-46,63"
    },
    {
      "latitude": "-23,5232",
      "longitude": "-46,558"
    },
    {
      "latitude": "-23,5217",
      "longitude": "-46,559"
    },
    {
      "latitude": "-23,5436",
      "longitude": "-46,6357"
    },
    {
      "latitude": "-23,5072",
      "longitude": "-46,7467"
    },
    {
      "latitude": "-23,5489",
      "longitude": "-46,6376"
    },
    {
      "latitude": "-23,543",
      "longitude": "-46,6361"
    },
    {
      "latitude": "-23,5442",
      "longitude": "-46,6368"
    },
    {
      "latitude": "-23,5459",
      "longitude": "-46,6368"
    },
    {
      "latitude": "-23,549",
      "longitude": "-46,6388"
    },
    {
      "latitude": "-23,5483",
      "longitude": "-46,6383"
    },
    {
      "latitude": "-23,5393",
      "longitude": "-46,6274"
    },
    {
      "latitude": "-23,5683",
      "longitude": "-46,7081"
    },
    {
      "latitude": "-23,7553",
      "longitude": "-46,5501"
    },
    {
      "latitude": "-23,5558",
      "longitude": "-46,6494"
    },
    {
      "latitude": "-23,9434",
      "longitude": "-46,299"
    },
    {
      "latitude": "-23,5555",
      "longitude": "-46,6467"
    },
    {
      "latitude": "-23,735",
      "longitude": "-46,5815"
    },
    {
      "latitude": "-23,5196",
      "longitude": "-46,6742"
    },
    {
      "latitude": "-23,5199",
      "longitude": "-46,6745"
    },
    {
      "latitude": "-23,5533",
      "longitude": "-46,7096"
    },
    {
      "latitude": "-23,5531",
      "longitude": "-46,7094"
    },
    {
      "latitude": "-23,5317",
      "longitude": "-46,5198"
    },
    {
      "latitude": "-23,5213",
      "longitude": "-46,6405"
    },
    {
      "latitude": "-23,52",
      "longitude": "-46,7008"
    },
    {
      "latitude": "-23,5204",
      "longitude": "-46,7014"
    },
    {
      "latitude": "-23,1955",
      "longitude": "-45,89"
    },
    {
      "latitude": "-23,5298",
      "longitude": "-46,6772"
    },
    {
      "latitude": "-23,544",
      "longitude": "-46,5314"
    },
    {
      "latitude": "-23,5341",
      "longitude": "-46,6554"
    },
    {
      "latitude": "-23,5342",
      "longitude": "-46,6554"
    },
    {
      "latitude": "-23,5343",
      "longitude": "-46,6552"
    },
    {
      "latitude": "-23,5533",
      "longitude": "-46,493"
    },
    {
      "latitude": "-23,521",
      "longitude": "-46,6675"
    },
    {
      "latitude": "-23,5217",
      "longitude": "-46,6676"
    },
    {
      "latitude": "-23,5464",
      "longitude": "-46,529"
    },
    {
      "latitude": "-23,5561",
      "longitude": "-46,6277"
    },
    {
      "latitude": "-23,4038",
      "longitude": "-46,7532"
    },
    {
      "latitude": "-23,6199",
      "longitude": "-46,6011"
    },
    {
      "latitude": "-23,5406",
      "longitude": "-46,5422"
    },
    {
      "latitude": "-23,5485",
      "longitude": "-46,6463"
    },
    {
      "latitude": "-23,5489",
      "longitude": "-46,6464"
    },
    {
      "latitude": "-23,5068",
      "longitude": "-46,7471"
    },
    {
      "latitude": "-23,6123",
      "longitude": "-46,4756"
    },
    {
      "latitude": "-23,5441",
      "longitude": "-46,6426"
    },
    {
      "latitude": "-23,5501",
      "longitude": "-46,639"
    },
    {
      "latitude": "-23,5476",
      "longitude": "-46,6382"
    },
    {
      "latitude": "-23,5486",
      "longitude": "-46,6386"
    },
    {
      "latitude": "-23,5489",
      "longitude": "-46,6388"
    },
    {
      "latitude": "-23,5477",
      "longitude": "-46,6381"
    },
    {
      "latitude": "-23,5476",
      "longitude": "-46,6381"
    },
    {
      "latitude": "-23,5483",
      "longitude": "-46,6384"
    },
    {
      "latitude": "-23,5484",
      "longitude": "-46,6385"
    },
    {
      "latitude": "-23,5147",
      "longitude": "-46,6283"
    },
    {
      "latitude": "-23,5407",
      "longitude": "-46,729"
    },
    {
      "latitude": "-23,5398",
      "longitude": "-46,7281"
    },
    {
      "latitude": "-23,5408",
      "longitude": "-46,7289"
    },
    {
      "latitude": "-23,5859",
      "longitude": "-46,6983"
    },
    {
      "latitude": "-23,6044",
      "longitude": "-46,719"
    },
    {
      "latitude": "-23,6198",
      "longitude": "-46,6268"
    },
    {
      "latitude": "-23,6619",
      "longitude": "-46,6863"
    },
    {
      "latitude": "-23,6194",
      "longitude": "-46,6275"
    },
    {
      "latitude": "-23,4046",
      "longitude": "-46,7503"
    },
    {
      "latitude": "-23,4046",
      "longitude": "-46,753"
    },
    {
      "latitude": "-23,4391",
      "longitude": "-46,7796"
    },
    {
      "latitude": "-23,5204",
      "longitude": "-46,6442"
    },
    {
      "latitude": "-23,5078",
      "longitude": "-46,5511"
    },
    {
      "latitude": "-23,516",
      "longitude": "-46,5529"
    },
    {
      "latitude": "-23,5222",
      "longitude": "-46,7485"
    },
    {
      "latitude": "-23,5173",
      "longitude": "-46,6434"
    },
    {
      "latitude": "-23,5214",
      "longitude": "-46,7466"
    },
    {
      "latitude": "-23,5105",
      "longitude": "-46,7206"
    },
    {
      "latitude": "-23,5135",
      "longitude": "-46,6275"
    },
    {
      "latitude": "-23,5268",
      "longitude": "-46,5759"
    },
    {
      "latitude": "-23,5175",
      "longitude": "-46,6417"
    },
    {
      "latitude": "-23,5177",
      "longitude": "-46,6385"
    },
    {
      "latitude": "-23,5176",
      "longitude": "-46,6386"
    },
    {
      "latitude": "-23,5102",
      "longitude": "-46,6881"
    },
    {
      "latitude": "-23,5212",
      "longitude": "-46,6411"
    },
    {
      "latitude": "-23,5262",
      "longitude": "-46,58"
    },
    {
      "latitude": "-23,5139",
      "longitude": "-46,6694"
    },
    {
      "latitude": "-23,5209",
      "longitude": "-46,6427"
    },
    {
      "latitude": "-23,5214",
      "longitude": "-46,6405"
    },
    {
      "latitude": "-23,5244",
      "longitude": "-46,5612"
    },
    {
      "latitude": "-23,5186",
      "longitude": "-46,647"
    },
    {
      "latitude": "-23,519",
      "longitude": "-46,6158"
    },
    {
      "latitude": "-23,5202",
      "longitude": "-46,6168"
    },
    {
      "latitude": "-23,5254",
      "longitude": "-46,5625"
    },
    {
      "latitude": "-23,5168",
      "longitude": "-46,7357"
    },
    {
      "latitude": "-23,5264",
      "longitude": "-46,5964"
    },
    {
      "latitude": "-23,405",
      "longitude": "-46,7523"
    },
    {
      "latitude": "-23,5201",
      "longitude": "-46,6247"
    },
    {
      "latitude": "-23,5138",
      "longitude": "-46,7267"
    },
    {
      "latitude": "-23,5139",
      "longitude": "-46,7269"
    },
    {
      "latitude": "-23,5225",
      "longitude": "-46,5593"
    },
    {
      "latitude": "-23,4815",
      "longitude": "-46,7709"
    },
    {
      "latitude": "-23,5222",
      "longitude": "-46,6109"
    },
    {
      "latitude": "-23,5183",
      "longitude": "-46,6195"
    },
    {
      "latitude": "-23,5174",
      "longitude": "-46,6308"
    },
    {
      "latitude": "-23,521",
      "longitude": "-46,642"
    },
    {
      "latitude": "-23,5181",
      "longitude": "-46,6347"
    },
    {
      "latitude": "-23,5154",
      "longitude": "-46,7261"
    },
    {
      "latitude": "-23,5179",
      "longitude": "-46,725"
    },
    {
      "latitude": "-23,5182",
      "longitude": "-46,63"
    },
    {
      "latitude": "-23,5198",
      "longitude": "-46,7477"
    },
    {
      "latitude": "-23,5197",
      "longitude": "-46,6217"
    },
    {
      "latitude": "-23,5137",
      "longitude": "-46,7258"
    },
    {
      "latitude": "-23,5194",
      "longitude": "-46,6306"
    },
    {
      "latitude": "-23,5194",
      "longitude": "-46,7226"
    },
    {
      "latitude": "-23,5393",
      "longitude": "-46,6275"
    },
    {
      "latitude": "-23,5185",
      "longitude": "-46,6249"
    },
    {
      "latitude": "-23,5073",
      "longitude": "-46,7"
    },
    {
      "latitude": "-23,5251",
      "longitude": "-46,567"
    },
    {
      "latitude": "-23,5289",
      "longitude": "-46,5851"
    },
    {
      "latitude": "-23,5309",
      "longitude": "-46,584"
    },
    {
      "latitude": "-23,5165",
      "longitude": "-46,6504"
    },
    {
      "latitude": "-23,5139",
      "longitude": "-46,727"
    },
    {
      "latitude": "-23,5169",
      "longitude": "-46,7352"
    },
    {
      "latitude": "-23,5234",
      "longitude": "-46,5583"
    },
    {
      "latitude": "-23,5169",
      "longitude": "-46,7355"
    },
    {
      "latitude": "-23,5169",
      "longitude": "-46,7357"
    },
    {
      "latitude": "-23,5225",
      "longitude": "-46,5588"
    },
    {
      "latitude": "-23,5157",
      "longitude": "-46,6666"
    },
    {
      "latitude": "-23,5159",
      "longitude": "-46,6671"
    },
    {
      "latitude": "-23,5194",
      "longitude": "-46,6156"
    },
    {
      "latitude": "-23,5194",
      "longitude": "-46,6299"
    },
    {
      "latitude": "-23,5237",
      "longitude": "-46,6076"
    },
    {
      "latitude": "-23,5233",
      "longitude": "-46,6045"
    },
    {
      "latitude": "-23,53",
      "longitude": "-46,5943"
    },
    {
      "latitude": "-23,507",
      "longitude": "-46,5529"
    },
    {
      "latitude": "-23,5267",
      "longitude": "-46,5741"
    },
    {
      "latitude": "-23,526",
      "longitude": "-46,5686"
    },
    {
      "latitude": "-23,5145",
      "longitude": "-46,727"
    },
    {
      "latitude": "-23,5238",
      "longitude": "-46,56"
    },
    {
      "latitude": "-23,5093",
      "longitude": "-46,6851"
    },
    {
      "latitude": "-23,5237",
      "longitude": "-46,6102"
    },
    {
      "latitude": "-23,5196",
      "longitude": "-46,6176"
    },
    {
      "latitude": "-23,652",
      "longitude": "-46,7223"
    },
    {
      "latitude": "-23,5318",
      "longitude": "-46,7479"
    },
    {
      "latitude": "-23,5692",
      "longitude": "-46,7038"
    },
    {
      "latitude": "-23,6441",
      "longitude": "-46,7252"
    },
    {
      "latitude": "-23,5269",
      "longitude": "-46,748"
    },
    {
      "latitude": "-23,5216",
      "longitude": "-46,7745"
    },
    {
      "latitude": "-23,6305",
      "longitude": "-46,7141"
    },
    {
      "latitude": "-23,5102",
      "longitude": "-46,7974"
    },
    {
      "latitude": "-23,5895",
      "longitude": "-46,6932"
    },
    {
      "latitude": "-23,6051",
      "longitude": "-46,699"
    },
    {
      "latitude": "-23,6002",
      "longitude": "-46,6946"
    },
    {
      "latitude": "-23,6754",
      "longitude": "-46,6996"
    },
    {
      "latitude": "-23,6691",
      "longitude": "-46,7044"
    },
    {
      "latitude": "-23,541",
      "longitude": "-46,7413"
    },
    {
      "latitude": "-23,5793",
      "longitude": "-46,6939"
    },
    {
      "latitude": "-23,6741",
      "longitude": "-46,7002"
    },
    {
      "latitude": "-23,5693",
      "longitude": "-46,7038"
    },
    {
      "latitude": "-23,5696",
      "longitude": "-46,7037"
    },
    {
      "latitude": "-23,6065",
      "longitude": "-46,6969"
    },
    {
      "latitude": "-23,5641",
      "longitude": "-46,7069"
    },
    {
      "latitude": "-23,6251",
      "longitude": "-46,7075"
    },
    {
      "latitude": "-23,6386",
      "longitude": "-46,7218"
    },
    {
      "latitude": "-23,5735",
      "longitude": "-46,7007"
    },
    {
      "latitude": "-23,6266",
      "longitude": "-46,7103"
    },
    {
      "latitude": "-23,6029",
      "longitude": "-46,6957"
    },
    {
      "latitude": "-23,6415",
      "longitude": "-46,7241"
    },
    {
      "latitude": "-23,6814",
      "longitude": "-46,6939"
    },
    {
      "latitude": "-23,5719",
      "longitude": "-46,7018"
    },
    {
      "latitude": "-23,5393",
      "longitude": "-46,7395"
    },
    {
      "latitude": "-23,5539",
      "longitude": "-46,7226"
    },
    {
      "latitude": "-23,5858",
      "longitude": "-46,6898"
    },
    {
      "latitude": "-23,5601",
      "longitude": "-46,7059"
    },
    {
      "latitude": "-23,6734",
      "longitude": "-46,7015"
    },
    {
      "latitude": "-23,6216",
      "longitude": "-46,7011"
    },
    {
      "latitude": "-23,6742",
      "longitude": "-46,7002"
    },
    {
      "latitude": "-23,5396",
      "longitude": "-46,7429"
    },
    {
      "latitude": "-23,5334",
      "longitude": "-46,7497"
    },
    {
      "latitude": "-23,559",
      "longitude": "-46,7128"
    },
    {
      "latitude": "-23,6406",
      "longitude": "-46,7235"
    },
    {
      "latitude": "-23,5597",
      "longitude": "-46,707"
    },
    {
      "latitude": "-23,6222",
      "longitude": "-46,7003"
    },
    {
      "latitude": "-23,6216",
      "longitude": "-46,7009"
    },
    {
      "latitude": "-23,5794",
      "longitude": "-46,696"
    },
    {
      "latitude": "-23,5738",
      "longitude": "-46,7024"
    },
    {
      "latitude": "-23,5154",
      "longitude": "-46,7262"
    },
    {
      "latitude": "-23,5269",
      "longitude": "-46,7479"
    },
    {
      "latitude": "-23,616",
      "longitude": "-46,6994"
    },
    {
      "latitude": "-23,5277",
      "longitude": "-46,5807"
    },
    {
      "latitude": "-23,5103",
      "longitude": "-46,7207"
    },
    {
      "latitude": "-23,5829",
      "longitude": "-46,6918"
    },
    {
      "latitude": "-23,5552",
      "longitude": "-46,72"
    },
    {
      "latitude": "-23,5334",
      "longitude": "-46,7469"
    },
    {
      "latitude": "-23,5956",
      "longitude": "-46,6959"
    },
    {
      "latitude": "-23,648",
      "longitude": "-46,725"
    },
    {
      "latitude": "-23,5555",
      "longitude": "-46,7192"
    },
    {
      "latitude": "-23,5787",
      "longitude": "-46,6942"
    },
    {
      "latitude": "-23,6718",
      "longitude": "-46,7021"
    },
    {
      "latitude": "-23,5938",
      "longitude": "-46,6946"
    },
    {
      "latitude": "-23,6758",
      "longitude": "-46,6994"
    },
    {
      "latitude": "-23,596",
      "longitude": "-46,7418"
    },
    {
      "latitude": "-23,5372",
      "longitude": "-46,7419"
    },
    {
      "latitude": "-23,5598",
      "longitude": "-46,7108"
    },
    {
      "latitude": "-23,5899",
      "longitude": "-46,6911"
    },
    {
      "latitude": "-23,5435",
      "longitude": "-46,7348"
    },
    {
      "latitude": "-23,6133",
      "longitude": "-46,6985"
    },
    {
      "latitude": "-23,6104",
      "longitude": "-46,6978"
    },
    {
      "latitude": "-23,6214",
      "longitude": "-46,7009"
    },
    {
      "latitude": "-23,6063",
      "longitude": "-46,6991"
    },
    {
      "latitude": "-23,646",
      "longitude": "-46,7255"
    },
    {
      "latitude": "-23,6634",
      "longitude": "-46,6771"
    },
    {
      "latitude": "-23,5724",
      "longitude": "-46,6998"
    },
    {
      "latitude": "-23,5271",
      "longitude": "-46,7474"
    },
    {
      "latitude": "-23,5386",
      "longitude": "-46,7441"
    },
    {
      "latitude": "-23,5385",
      "longitude": "-46,7441"
    },
    {
      "latitude": "-23,5866",
      "longitude": "-46,6951"
    },
    {
      "latitude": "-23,5932",
      "longitude": "-46,6943"
    },
    {
      "latitude": "-23,5374",
      "longitude": "-46,7454"
    },
    {
      "latitude": "-23,5494",
      "longitude": "-46,732"
    },
    {
      "latitude": "-23,5448",
      "longitude": "-46,7336"
    },
    {
      "latitude": "-23,5627",
      "longitude": "-46,704"
    },
    {
      "latitude": "-23,5158",
      "longitude": "-46,6578"
    },
    {
      "latitude": "-23,53",
      "longitude": "-46,7478"
    },
    {
      "latitude": "-23,6743",
      "longitude": "-46,6999"
    },
    {
      "latitude": "-23,674",
      "longitude": "-46,7002"
    },
    {
      "latitude": "-23,6661",
      "longitude": "-46,7066"
    },
    {
      "latitude": "-23,6159",
      "longitude": "-46,6993"
    },
    {
      "latitude": "-23,5786",
      "longitude": "-46,6946"
    },
    {
      "latitude": "-23,5739",
      "longitude": "-46,6983"
    },
    {
      "latitude": "-23,5372",
      "longitude": "-46,7432"
    },
    {
      "latitude": "-23,5433",
      "longitude": "-46,7384"
    },
    {
      "latitude": "-23,5873",
      "longitude": "-46,6907"
    },
    {
      "latitude": "-23,587",
      "longitude": "-46,6907"
    },
    {
      "latitude": "-23,5857",
      "longitude": "-46,6908"
    },
    {
      "latitude": "-23,6561",
      "longitude": "-46,7187"
    },
    {
      "latitude": "-23,5371",
      "longitude": "-46,7433"
    },
    {
      "latitude": "-23,624",
      "longitude": "-46,7103"
    },
    {
      "latitude": "-23,5564",
      "longitude": "-46,6309"
    },
    {
      "latitude": "-23,5565",
      "longitude": "-46,6352"
    },
    {
      "latitude": "-23,607",
      "longitude": "-46,751"
    },
    {
      "latitude": "-23,5439",
      "longitude": "-46,6217"
    },
    {
      "latitude": "-23,6213",
      "longitude": "-46,6983"
    },
    {
      "latitude": "-23,6655",
      "longitude": "-46,7122"
    },
    {
      "latitude": "-23,6654",
      "longitude": "-46,7118"
    },
    {
      "latitude": "-23,6819",
      "longitude": "-46,7418"
    },
    {
      "latitude": "-23,6256",
      "longitude": "-46,7653"
    },
    {
      "latitude": "-23,6277",
      "longitude": "-46,7669"
    },
    {
      "latitude": "-23,6724",
      "longitude": "-46,7428"
    },
    {
      "latitude": "-23,7248",
      "longitude": "-46,7858"
    },
    {
      "latitude": "-23,6726",
      "longitude": "-46,7437"
    },
    {
      "latitude": "-23,6714",
      "longitude": "-46,741"
    },
    {
      "latitude": "-23,6832",
      "longitude": "-46,7685"
    },
    {
      "latitude": "-23,6832",
      "longitude": "-46,7684"
    },
    {
      "latitude": "-23,7225",
      "longitude": "-46,7853"
    },
    {
      "latitude": "-23,6986",
      "longitude": "-46,6478"
    },
    {
      "latitude": "-23,6973",
      "longitude": "-46,6491"
    },
    {
      "latitude": "-23,6979",
      "longitude": "-46,6711"
    },
    {
      "latitude": "-23,7024",
      "longitude": "-46,6451"
    },
    {
      "latitude": "-23,6488",
      "longitude": "-46,7527"
    },
    {
      "latitude": "-23,6606",
      "longitude": "-46,7681"
    },
    {
      "latitude": "-23,6281",
      "longitude": "-46,7674"
    },
    {
      "latitude": "-23,612",
      "longitude": "-46,7544"
    },
    {
      "latitude": "-23,6227",
      "longitude": "-46,7626"
    },
    {
      "latitude": "-23,6265",
      "longitude": "-46,7661"
    },
    {
      "latitude": "-23,6286",
      "longitude": "-46,768"
    },
    {
      "latitude": "-23,6188",
      "longitude": "-46,5926"
    },
    {
      "latitude": "-23,6295",
      "longitude": "-46,5891"
    },
    {
      "latitude": "-23,6909",
      "longitude": "-46,753"
    },
    {
      "latitude": "-23,4793",
      "longitude": "-46,7544"
    },
    {
      "latitude": "-23,7113",
      "longitude": "-46,6155"
    },
    {
      "latitude": "-23,5863",
      "longitude": "-46,698"
    },
    {
      "latitude": "-23,5925",
      "longitude": "-46,6521"
    },
    {
      "latitude": "-23,5078",
      "longitude": "-46,5515"
    },
    {
      "latitude": "-23,5866",
      "longitude": "-46,671"
    },
    {
      "latitude": "-23,5862",
      "longitude": "-46,673"
    },
    {
      "latitude": "-23,6037",
      "longitude": "-46,6006"
    },
    {
      "latitude": "-23,6276",
      "longitude": "-46,6203"
    },
    {
      "latitude": "-23,6225",
      "longitude": "-46,6125"
    },
    {
      "latitude": "-23,616",
      "longitude": "-46,6092"
    },
    {
      "latitude": "-23,6281",
      "longitude": "-46,6235"
    },
    {
      "latitude": "-23,6286",
      "longitude": "-46,6263"
    },
    {
      "latitude": "-23,6255",
      "longitude": "-46,6152"
    },
    {
      "latitude": "-23,5016",
      "longitude": "-46,6154"
    },
    {
      "latitude": "-23,5101",
      "longitude": "-46,6186"
    },
    {
      "latitude": "-23,5118",
      "longitude": "-46,6241"
    },
    {
      "latitude": "-23,6436",
      "longitude": "-46,6725"
    },
    {
      "latitude": "-23,6296",
      "longitude": "-46,6665"
    },
    {
      "latitude": "-23,6244",
      "longitude": "-46,6614"
    },
    {
      "latitude": "-23,6609",
      "longitude": "-46,7055"
    },
    {
      "latitude": "-23,6605",
      "longitude": "-46,7035"
    },
    {
      "latitude": "-23,6698",
      "longitude": "-46,7017"
    },
    {
      "latitude": "-23,6633",
      "longitude": "-46,7073"
    },
    {
      "latitude": "-23,6633",
      "longitude": "-46,7079"
    },
    {
      "latitude": "-23,6624",
      "longitude": "-46,7069"
    },
    {
      "latitude": "-23,664",
      "longitude": "-46,708"
    },
    {
      "latitude": "-23,6626",
      "longitude": "-46,7066"
    },
    {
      "latitude": "-23,6631",
      "longitude": "-46,7076"
    },
    {
      "latitude": "-23,5707",
      "longitude": "-46,7102"
    },
    {
      "latitude": "-23,5723",
      "longitude": "-46,7049"
    },
    {
      "latitude": "-23,5454",
      "longitude": "-46,6369"
    },
    {
      "latitude": "-23,5565",
      "longitude": "-46,6375"
    },
    {
      "latitude": "-23,5495",
      "longitude": "-46,6389"
    },
    {
      "latitude": "-23,5494",
      "longitude": "-46,6385"
    },
    {
      "latitude": "-23,5497",
      "longitude": "-46,6386"
    },
    {
      "latitude": "-23,5471",
      "longitude": "-46,6379"
    },
    {
      "latitude": "-23,5831",
      "longitude": "-46,6526"
    },
    {
      "latitude": "-23,5903",
      "longitude": "-46,6494"
    },
    {
      "latitude": "-23,5488",
      "longitude": "-46,6388"
    },
    {
      "latitude": "-23,5486",
      "longitude": "-46,6392"
    },
    {
      "latitude": "-23,549",
      "longitude": "-46,6392"
    },
    {
      "latitude": "-23,5881",
      "longitude": "-46,6525"
    },
    {
      "latitude": "-23,5776",
      "longitude": "-46,6449"
    },
    {
      "latitude": "-23,5789",
      "longitude": "-46,647"
    },
    {
      "latitude": "-23,5653",
      "longitude": "-46,6406"
    },
    {
      "latitude": "-23,5912",
      "longitude": "-46,6508"
    },
    {
      "latitude": "-23,5692",
      "longitude": "-46,6409"
    },
    {
      "latitude": "-23,5843",
      "longitude": "-46,5469"
    },
    {
      "latitude": "-23,6229",
      "longitude": "-46,6804"
    },
    {
      "latitude": "-23,622",
      "longitude": "-46,6794"
    },
    {
      "latitude": "-23,6219",
      "longitude": "-46,6793"
    },
    {
      "latitude": "-23,6273",
      "longitude": "-46,6847"
    },
    {
      "latitude": "-23,565",
      "longitude": "-46,559"
    },
    {
      "latitude": "-23,645",
      "longitude": "-46,6722"
    },
    {
      "latitude": "-23,6596",
      "longitude": "-46,6635"
    },
    {
      "latitude": "-23,5691",
      "longitude": "-46,7067"
    },
    {
      "latitude": "-23,5702",
      "longitude": "-46,7059"
    },
    {
      "latitude": "-23,5679",
      "longitude": "-46,7077"
    },
    {
      "latitude": "-23,4801",
      "longitude": "-46,3848"
    },
    {
      "latitude": "-23,523",
      "longitude": "-46,6295"
    },
    {
      "latitude": "-23,5344",
      "longitude": "-46,636"
    },
    {
      "latitude": "-23,5296",
      "longitude": "-46,6316"
    },
    {
      "latitude": "-23,5683",
      "longitude": "-46,609"
    },
    {
      "latitude": "-23,5747",
      "longitude": "-46,6079"
    },
    {
      "latitude": "-23,573",
      "longitude": "-46,6079"
    },
    {
      "latitude": "-23,5255",
      "longitude": "-46,5575"
    },
    {
      "latitude": "-23,5392",
      "longitude": "-46,6751"
    },
    {
      "latitude": "-23,5298",
      "longitude": "-46,6771"
    },
    {
      "latitude": "-23,5297",
      "longitude": "-46,6774"
    },
    {
      "latitude": "-23,5303",
      "longitude": "-46,6776"
    },
    {
      "latitude": "-23,7412",
      "longitude": "-46,7058"
    },
    {
      "latitude": "-23,7103",
      "longitude": "-46,6995"
    },
    {
      "latitude": "-23,5394",
      "longitude": "-46,6328"
    },
    {
      "latitude": "-23,7198",
      "longitude": "-46,6964"
    },
    {
      "latitude": "-23,6007",
      "longitude": "-46,512"
    },
    {
      "latitude": "-23,564",
      "longitude": "-46,7443"
    },
    {
      "latitude": "-23,5062",
      "longitude": "-46,4765"
    },
    {
      "latitude": "-23,5101",
      "longitude": "-46,4978"
    },
    {
      "latitude": "-23,492",
      "longitude": "-46,4458"
    },
    {
      "latitude": "-23,5072",
      "longitude": "-46,4862"
    },
    {
      "latitude": "-23,545",
      "longitude": "-46,6432"
    },
    {
      "latitude": "-23,5347",
      "longitude": "-46,6537"
    },
    {
      "latitude": "-23,5397",
      "longitude": "-46,6451"
    },
    {
      "latitude": "-23,5371",
      "longitude": "-46,6495"
    },
    {
      "latitude": "-23,5457",
      "longitude": "-46,7108"
    },
    {
      "latitude": "-23,5118",
      "longitude": "-46,6288"
    },
    {
      "latitude": "-23,5229",
      "longitude": "-46,6303"
    },
    {
      "latitude": "-23,5248",
      "longitude": "-46,6308"
    },
    {
      "latitude": "-23,5244",
      "longitude": "-46,6306"
    },
    {
      "latitude": "-23,5166",
      "longitude": "-46,6297"
    },
    {
      "latitude": "-23,5251",
      "longitude": "-46,6312"
    },
    {
      "latitude": "-23,5087",
      "longitude": "-46,629"
    },
    {
      "latitude": "-23,6085",
      "longitude": "-46,6767"
    },
    {
      "latitude": "-23,6644",
      "longitude": "-46,5132"
    },
    {
      "latitude": "-23,5876",
      "longitude": "-46,6716"
    },
    {
      "latitude": "-23,5515",
      "longitude": "-46,6404"
    },
    {
      "latitude": "-23,6287",
      "longitude": "-46,6891"
    },
    {
      "latitude": "-23,659",
      "longitude": "-46,7037"
    },
    {
      "latitude": "-23,614",
      "longitude": "-46,6786"
    },
    {
      "latitude": "-23,5918",
      "longitude": "-46,6726"
    },
    {
      "latitude": "-23,613",
      "longitude": "-46,678"
    },
    {
      "latitude": "-23,5901",
      "longitude": "-46,6722"
    },
    {
      "latitude": "-23,5949",
      "longitude": "-46,6729"
    },
    {
      "latitude": "-23,6028",
      "longitude": "-46,6744"
    },
    {
      "latitude": "-23,6424",
      "longitude": "-46,6996"
    },
    {
      "latitude": "-23,603",
      "longitude": "-46,6745"
    },
    {
      "latitude": "-23,6189",
      "longitude": "-46,6827"
    },
    {
      "latitude": "-23,598",
      "longitude": "-46,6739"
    },
    {
      "latitude": "-23,6031",
      "longitude": "-46,6746"
    },
    {
      "latitude": "-23,6087",
      "longitude": "-46,6766"
    },
    {
      "latitude": "-23,6041",
      "longitude": "-46,6748"
    },
    {
      "latitude": "-23,619",
      "longitude": "-46,6828"
    },
    {
      "latitude": "-23,6264",
      "longitude": "-46,6873"
    },
    {
      "latitude": "-23,6426",
      "longitude": "-46,6996"
    },
    {
      "latitude": "-23,6264",
      "longitude": "-46,6875"
    },
    {
      "latitude": "-23,6432",
      "longitude": "-46,7003"
    },
    {
      "latitude": "-23,6422",
      "longitude": "-46,6993"
    },
    {
      "latitude": "-23,5427",
      "longitude": "-46,6268"
    },
    {
      "latitude": "-23,509",
      "longitude": "-46,6938"
    },
    {
      "latitude": "-23,5285",
      "longitude": "-46,5828"
    },
    {
      "latitude": "-23,5432",
      "longitude": "-46,5803"
    },
    {
      "latitude": "-23,5393",
      "longitude": "-46,5816"
    },
    {
      "latitude": "-23,5682",
      "longitude": "-46,5738"
    },
    {
      "latitude": "-23,5618",
      "longitude": "-46,5765"
    },
    {
      "latitude": "-23,5521",
      "longitude": "-46,5769"
    },
    {
      "latitude": "-23,5401",
      "longitude": "-46,5809"
    },
    {
      "latitude": "-23,5554",
      "longitude": "-46,5769"
    },
    {
      "latitude": "-23,5826",
      "longitude": "-46,5715"
    },
    {
      "latitude": "-23,5547",
      "longitude": "-46,5768"
    },
    {
      "latitude": "-23,5519",
      "longitude": "-46,5779"
    },
    {
      "latitude": "-23,8145",
      "longitude": "-46,7353"
    },
    {
      "latitude": "-23,8281",
      "longitude": "-46,7312"
    },
    {
      "latitude": "-23,6921",
      "longitude": "-46,6779"
    },
    {
      "latitude": "-23,5224",
      "longitude": "-46,6511"
    },
    {
      "latitude": "-23,5964",
      "longitude": "-46,6508"
    },
    {
      "latitude": "-23,5977",
      "longitude": "-46,6509"
    },
    {
      "latitude": "-23,6014",
      "longitude": "-46,6509"
    },
    {
      "latitude": "-23,5914",
      "longitude": "-46,6508"
    },
    {
      "latitude": "-23,602",
      "longitude": "-46,6511"
    },
    {
      "latitude": "-23,602",
      "longitude": "-46,6515"
    },
    {
      "latitude": "-23,6254",
      "longitude": "-46,6888"
    },
    {
      "latitude": "-23,6256",
      "longitude": "-46,6917"
    },
    {
      "latitude": "-23,6242",
      "longitude": "-46,6948"
    },
    {
      "latitude": "-23,6236",
      "longitude": "-46,696"
    },
    {
      "latitude": "-23,6259",
      "longitude": "-46,6878"
    },
    {
      "latitude": "-23,6259",
      "longitude": "-46,6916"
    },
    {
      "latitude": "-23,6214",
      "longitude": "-46,6982"
    },
    {
      "latitude": "-23,6238",
      "longitude": "-46,6961"
    },
    {
      "latitude": "-23,6265",
      "longitude": "-46,6874"
    },
    {
      "latitude": "-23,6216",
      "longitude": "-46,6978"
    },
    {
      "latitude": "-23,6221",
      "longitude": "-46,694"
    },
    {
      "latitude": "-23,5686",
      "longitude": "-46,7059"
    },
    {
      "latitude": "-23,6223",
      "longitude": "-46,6975"
    },
    {
      "latitude": "-23,7066",
      "longitude": "-46,5757"
    },
    {
      "latitude": "-23,7211",
      "longitude": "-46,5739"
    },
    {
      "latitude": "-23,5715",
      "longitude": "-46,5063"
    },
    {
      "latitude": "-23,5388",
      "longitude": "-46,6406"
    },
    {
      "latitude": "-23,5365",
      "longitude": "-46,6426"
    },
    {
      "latitude": "-23,5366",
      "longitude": "-46,6425"
    },
    {
      "latitude": "-23,5371",
      "longitude": "-46,6423"
    },
    {
      "latitude": "-23,5375",
      "longitude": "-46,642"
    },
    {
      "latitude": "-23,5355",
      "longitude": "-46,643"
    },
    {
      "latitude": "-23,5356",
      "longitude": "-46,643"
    },
    {
      "latitude": "-23,5878",
      "longitude": "-46,6642"
    },
    {
      "latitude": "-23,5878",
      "longitude": "-46,6643"
    },
    {
      "latitude": "-23,5817",
      "longitude": "-46,6633"
    },
    {
      "latitude": "-23,5901",
      "longitude": "-46,6644"
    },
    {
      "latitude": "-23,5592",
      "longitude": "-46,5685"
    },
    {
      "latitude": "-23,5579",
      "longitude": "-46,5715"
    },
    {
      "latitude": "-23,5702",
      "longitude": "-46,6894"
    },
    {
      "latitude": "-23,5698",
      "longitude": "-46,6882"
    },
    {
      "latitude": "-23,5635",
      "longitude": "-46,6768"
    },
    {
      "latitude": "-23,5656",
      "longitude": "-46,6805"
    },
    {
      "latitude": "-23,572",
      "longitude": "-46,6986"
    },
    {
      "latitude": "-23,5678",
      "longitude": "-46,6845"
    },
    {
      "latitude": "-23,5679",
      "longitude": "-46,6845"
    },
    {
      "latitude": "-23,5707",
      "longitude": "-46,6908"
    },
    {
      "latitude": "-23,5642",
      "longitude": "-46,678"
    },
    {
      "latitude": "-23,5693",
      "longitude": "-46,6876"
    },
    {
      "latitude": "-23,5643",
      "longitude": "-46,6782"
    },
    {
      "latitude": "-23,5424",
      "longitude": "-46,6157"
    },
    {
      "latitude": "-23,5454",
      "longitude": "-46,6209"
    },
    {
      "latitude": "-23,5425",
      "longitude": "-46,6158"
    },
    {
      "latitude": "-23,4608",
      "longitude": "-46,7215"
    },
    {
      "latitude": "-23,5078",
      "longitude": "-46,7145"
    },
    {
      "latitude": "-23,4065",
      "longitude": "-46,735"
    },
    {
      "latitude": "-23,4348",
      "longitude": "-46,72"
    },
    {
      "latitude": "-23,4609",
      "longitude": "-46,7213"
    },
    {
      "latitude": "-23,4983",
      "longitude": "-46,7253"
    },
    {
      "latitude": "-23,5959",
      "longitude": "-46,4523"
    },
    {
      "latitude": "-23,5958",
      "longitude": "-46,4524"
    },
    {
      "latitude": "-23,5958",
      "longitude": "-46,4519"
    },
    {
      "latitude": "-23,405",
      "longitude": "-46,7439"
    },
    {
      "latitude": "-23,595",
      "longitude": "-46,4284"
    },
    {
      "latitude": "-23,5956",
      "longitude": "-46,4344"
    },
    {
      "latitude": "-23,5963",
      "longitude": "-46,4355"
    },
    {
      "latitude": "-23,5958",
      "longitude": "-46,4377"
    },
    {
      "latitude": "-23,532",
      "longitude": "-46,5305"
    },
    {
      "latitude": "-23,5215",
      "longitude": "-46,6953"
    },
    {
      "latitude": "-23,552",
      "longitude": "-46,6235"
    },
    {
      "latitude": "-23,5446",
      "longitude": "-46,5934"
    },
    {
      "latitude": "-23,5444",
      "longitude": "-46,5925"
    },
    {
      "latitude": "-23,5323",
      "longitude": "-46,5291"
    },
    {
      "latitude": "-23,5457",
      "longitude": "-46,5981"
    },
    {
      "latitude": "-23,5321",
      "longitude": "-46,5311"
    },
    {
      "latitude": "-23,545",
      "longitude": "-46,5957"
    },
    {
      "latitude": "-23,5523",
      "longitude": "-46,6101"
    },
    {
      "latitude": "-23,5495",
      "longitude": "-46,6055"
    },
    {
      "latitude": "-23,5564",
      "longitude": "-46,6294"
    },
    {
      "latitude": "-23,5514",
      "longitude": "-46,6249"
    },
    {
      "latitude": "-23,5482",
      "longitude": "-46,603"
    },
    {
      "latitude": "-23,5312",
      "longitude": "-46,52"
    },
    {
      "latitude": "-23,5386",
      "longitude": "-46,5653"
    },
    {
      "latitude": "-23,5477",
      "longitude": "-46,6479"
    },
    {
      "latitude": "-23,5536",
      "longitude": "-46,6358"
    },
    {
      "latitude": "-23,5321",
      "longitude": "-46,5309"
    },
    {
      "latitude": "-23,5354",
      "longitude": "-46,5487"
    },
    {
      "latitude": "-23,5316",
      "longitude": "-46,5214"
    },
    {
      "latitude": "-23,5437",
      "longitude": "-46,5893"
    },
    {
      "latitude": "-23,5434",
      "longitude": "-46,5871"
    },
    {
      "latitude": "-23,5562",
      "longitude": "-46,6376"
    },
    {
      "latitude": "-23,5348",
      "longitude": "-46,5473"
    },
    {
      "latitude": "-23,5444",
      "longitude": "-46,5929"
    },
    {
      "latitude": "-23,5422",
      "longitude": "-46,7308"
    },
    {
      "latitude": "-23,5406",
      "longitude": "-46,7292"
    },
    {
      "latitude": "-23,5395",
      "longitude": "-46,7279"
    },
    {
      "latitude": "-23,5752",
      "longitude": "-46,7072"
    },
    {
      "latitude": "-23,5792",
      "longitude": "-46,7104"
    },
    {
      "latitude": "-23,6448",
      "longitude": "-46,6726"
    },
    {
      "latitude": "-23,6348",
      "longitude": "-46,679"
    },
    {
      "latitude": "-23,6432",
      "longitude": "-46,6733"
    },
    {
      "latitude": "-23,5837",
      "longitude": "-46,5761"
    },
    {
      "latitude": "-23,5994",
      "longitude": "-46,5298"
    },
    {
      "latitude": "-23,5854",
      "longitude": "-46,5877"
    },
    {
      "latitude": "-23,5847",
      "longitude": "-46,5811"
    },
    {
      "latitude": "-23,5843",
      "longitude": "-46,5852"
    },
    {
      "latitude": "-23,5824",
      "longitude": "-46,5642"
    },
    {
      "latitude": "-23,5863",
      "longitude": "-46,5889"
    },
    {
      "latitude": "-23,5844",
      "longitude": "-46,5784"
    },
    {
      "latitude": "-23,5845",
      "longitude": "-46,5778"
    },
    {
      "latitude": "-23,5827",
      "longitude": "-46,5721"
    },
    {
      "latitude": "-23,5844",
      "longitude": "-46,5862"
    },
    {
      "latitude": "-23,5831",
      "longitude": "-46,5686"
    },
    {
      "latitude": "-23,5871",
      "longitude": "-46,5907"
    },
    {
      "latitude": "-23,5826",
      "longitude": "-46,5629"
    },
    {
      "latitude": "-23,582",
      "longitude": "-46,5582"
    },
    {
      "latitude": "-23,6028",
      "longitude": "-46,7443"
    },
    {
      "latitude": "-23,5937",
      "longitude": "-46,7351"
    },
    {
      "latitude": "-23,584",
      "longitude": "-46,7165"
    },
    {
      "latitude": "-23,5897",
      "longitude": "-46,7294"
    },
    {
      "latitude": "-23,589",
      "longitude": "-46,7286"
    },
    {
      "latitude": "-23,6074",
      "longitude": "-46,7512"
    },
    {
      "latitude": "-23,585",
      "longitude": "-46,7195"
    },
    {
      "latitude": "-23,5907",
      "longitude": "-46,7304"
    },
    {
      "latitude": "-23,6013",
      "longitude": "-46,743"
    },
    {
      "latitude": "-23,6062",
      "longitude": "-46,7475"
    },
    {
      "latitude": "-23,5817",
      "longitude": "-46,712"
    },
    {
      "latitude": "-23,5766",
      "longitude": "-46,7077"
    },
    {
      "latitude": "-23,5529",
      "longitude": "-46,6454"
    },
    {
      "latitude": "-23,5794",
      "longitude": "-46,7102"
    },
    {
      "latitude": "-23,5796",
      "longitude": "-46,7102"
    },
    {
      "latitude": "-23,5834",
      "longitude": "-46,7151"
    },
    {
      "latitude": "-23,6055",
      "longitude": "-46,7465"
    },
    {
      "latitude": "-23,5922",
      "longitude": "-46,7321"
    },
    {
      "latitude": "-23,5865",
      "longitude": "-46,7243"
    },
    {
      "latitude": "-23,5922",
      "longitude": "-46,7317"
    },
    {
      "latitude": "-23,5911",
      "longitude": "-46,7307"
    },
    {
      "latitude": "-23,5785",
      "longitude": "-46,7089"
    },
    {
      "latitude": "-23,5867",
      "longitude": "-46,7244"
    },
    {
      "latitude": "-23,5793",
      "longitude": "-46,7104"
    },
    {
      "latitude": "-23,5971",
      "longitude": "-46,6511"
    },
    {
      "latitude": "-23,5986",
      "longitude": "-46,6512"
    },
    {
      "latitude": "-23,6254",
      "longitude": "-46,6288"
    },
    {
      "latitude": "-23,6214",
      "longitude": "-46,6278"
    },
    {
      "latitude": "-23,6183",
      "longitude": "-46,6276"
    },
    {
      "latitude": "-23,6207",
      "longitude": "-46,6278"
    },
    {
      "latitude": "-23,6139",
      "longitude": "-46,6273"
    },
    {
      "latitude": "-23,6176",
      "longitude": "-46,6278"
    },
    {
      "latitude": "-23,6191",
      "longitude": "-46,6277"
    },
    {
      "latitude": "-23,6223",
      "longitude": "-46,6279"
    },
    {
      "latitude": "-23,6256",
      "longitude": "-46,6292"
    },
    {
      "latitude": "-23,6142",
      "longitude": "-46,6273"
    },
    {
      "latitude": "-23,6106",
      "longitude": "-46,628"
    },
    {
      "latitude": "-23,6189",
      "longitude": "-46,6281"
    },
    {
      "latitude": "-23,6139",
      "longitude": "-46,6271"
    },
    {
      "latitude": "-23,5868",
      "longitude": "-46,6352"
    },
    {
      "latitude": "-23,5089",
      "longitude": "-46,6736"
    },
    {
      "latitude": "-23,5928",
      "longitude": "-46,6948"
    },
    {
      "latitude": "-23,616",
      "longitude": "-46,6271"
    },
    {
      "latitude": "-23,62",
      "longitude": "-46,6274"
    },
    {
      "latitude": "-23,545",
      "longitude": "-46,6366"
    },
    {
      "latitude": "-23,5393",
      "longitude": "-46,6338"
    },
    {
      "latitude": "-23,5378",
      "longitude": "-46,6346"
    },
    {
      "latitude": "-23,5345",
      "longitude": "-46,633"
    },
    {
      "latitude": "-23,5433",
      "longitude": "-46,6357"
    },
    {
      "latitude": "-23,5378",
      "longitude": "-46,6338"
    },
    {
      "latitude": "-23,5396",
      "longitude": "-46,6341"
    },
    {
      "latitude": "-23,5372",
      "longitude": "-46,6337"
    },
    {
      "latitude": "-23,5406",
      "longitude": "-46,6339"
    },
    {
      "latitude": "-23,5415",
      "longitude": "-46,6342"
    },
    {
      "latitude": "-23,5421",
      "longitude": "-46,635"
    },
    {
      "latitude": "-23,5422",
      "longitude": "-46,6354"
    },
    {
      "latitude": "-23,5958",
      "longitude": "-46,5886"
    },
    {
      "latitude": "-23,5592",
      "longitude": "-46,6091"
    },
    {
      "latitude": "-23,583",
      "longitude": "-46,5975"
    },
    {
      "latitude": "-23,5842",
      "longitude": "-46,597"
    },
    {
      "latitude": "-23,582",
      "longitude": "-46,5979"
    },
    {
      "latitude": "-23,5832",
      "longitude": "-46,6009"
    },
    {
      "latitude": "-23,5545",
      "longitude": "-46,6107"
    },
    {
      "latitude": "-23,5852",
      "longitude": "-46,5964"
    },
    {
      "latitude": "-23,5846",
      "longitude": "-46,5967"
    },
    {
      "latitude": "-23,5845",
      "longitude": "-46,5969"
    },
    {
      "latitude": "-23,5617",
      "longitude": "-46,6079"
    },
    {
      "latitude": "-23,5594",
      "longitude": "-46,609"
    },
    {
      "latitude": "-23,582",
      "longitude": "-46,598"
    },
    {
      "latitude": "-23,6043",
      "longitude": "-46,6014"
    },
    {
      "latitude": "-23,6227",
      "longitude": "-46,6121"
    },
    {
      "latitude": "-23,6403",
      "longitude": "-46,6738"
    },
    {
      "latitude": "-23,6228",
      "longitude": "-46,6126"
    },
    {
      "latitude": "-23,6053",
      "longitude": "-46,6045"
    },
    {
      "latitude": "-23,614",
      "longitude": "-46,6084"
    },
    {
      "latitude": "-23,6161",
      "longitude": "-46,6093"
    },
    {
      "latitude": "-23,5905",
      "longitude": "-46,6897"
    },
    {
      "latitude": "-23,5902",
      "longitude": "-46,6805"
    },
    {
      "latitude": "-23,5158",
      "longitude": "-46,6668"
    },
    {
      "latitude": "-23,5189",
      "longitude": "-46,6439"
    },
    {
      "latitude": "-23,5264",
      "longitude": "-46,6823"
    },
    {
      "latitude": "-23,5256",
      "longitude": "-46,6818"
    },
    {
      "latitude": "-23,5261",
      "longitude": "-46,6821"
    },
    {
      "latitude": "-23,5326",
      "longitude": "-46,6866"
    },
    {
      "latitude": "-23,5189",
      "longitude": "-46,4439"
    },
    {
      "latitude": "-23,6011",
      "longitude": "-46,7481"
    },
    {
      "latitude": "-23,4644",
      "longitude": "-46,6546"
    },
    {
      "latitude": "-23,5537",
      "longitude": "-46,709"
    },
    {
      "latitude": "-23,5594",
      "longitude": "-46,6968"
    },
    {
      "latitude": "-23,5564",
      "longitude": "-46,7031"
    },
    {
      "latitude": "-23,5634",
      "longitude": "-46,6915"
    },
    {
      "latitude": "-23,5912",
      "longitude": "-46,651"
    },
    {
      "latitude": "-23,5852",
      "longitude": "-46,6554"
    },
    {
      "latitude": "-23,5853",
      "longitude": "-46,6556"
    },
    {
      "latitude": "-23,6105",
      "longitude": "-46,6863"
    },
    {
      "latitude": "-23,5574",
      "longitude": "-46,6612"
    },
    {
      "latitude": "-23,5601",
      "longitude": "-46,6581"
    },
    {
      "latitude": "-23,5584",
      "longitude": "-46,6603"
    },
    {
      "latitude": "-23,559",
      "longitude": "-46,6594"
    },
    {
      "latitude": "-23,5631",
      "longitude": "-46,6544"
    },
    {
      "latitude": "-23,4956",
      "longitude": "-46,4783"
    },
    {
      "latitude": "-23,5836",
      "longitude": "-46,5863"
    },
    {
      "latitude": "-23,5695",
      "longitude": "-46,6308"
    },
    {
      "latitude": "-23,5354",
      "longitude": "-46,6625"
    },
    {
      "latitude": "-23,5131",
      "longitude": "-46,6789"
    },
    {
      "latitude": "-23,5086",
      "longitude": "-46,6873"
    },
    {
      "latitude": "-23,5903",
      "longitude": "-46,7027"
    },
    {
      "latitude": "-23,5885",
      "longitude": "-46,6999"
    },
    {
      "latitude": "-23,588",
      "longitude": "-46,6992"
    },
    {
      "latitude": "-23,5101",
      "longitude": "-46,7204"
    },
    {
      "latitude": "-23,5088",
      "longitude": "-46,6656"
    },
    {
      "latitude": "-23,5101",
      "longitude": "-46,6659"
    },
    {
      "latitude": "-23,5109",
      "longitude": "-46,666"
    },
    {
      "latitude": "-23,5112",
      "longitude": "-46,6664"
    },
    {
      "latitude": "-23,5149",
      "longitude": "-46,6667"
    },
    {
      "latitude": "-23,5152",
      "longitude": "-46,6668"
    },
    {
      "latitude": "-23,5622",
      "longitude": "-46,5923"
    },
    {
      "latitude": "-23,601",
      "longitude": "-46,651"
    },
    {
      "latitude": "-23,6014",
      "longitude": "-46,6445"
    },
    {
      "latitude": "-23,5152",
      "longitude": "-46,6411"
    },
    {
      "latitude": "-23,515",
      "longitude": "-46,6409"
    },
    {
      "latitude": "-23,5151",
      "longitude": "-46,641"
    },
    {
      "latitude": "-23,515",
      "longitude": "-46,6303"
    },
    {
      "latitude": "-23,5156",
      "longitude": "-46,6459"
    },
    {
      "latitude": "-23,5156",
      "longitude": "-46,6453"
    },
    {
      "latitude": "-23,5156",
      "longitude": "-46,6497"
    },
    {
      "latitude": "-23,5146",
      "longitude": "-46,638"
    },
    {
      "latitude": "-23,5146",
      "longitude": "-46,6393"
    },
    {
      "latitude": "-23,5151",
      "longitude": "-46,642"
    },
    {
      "latitude": "-23,5155",
      "longitude": "-46,6452"
    },
    {
      "latitude": "-23,5154",
      "longitude": "-46,6442"
    },
    {
      "latitude": "-23,5157",
      "longitude": "-46,6405"
    },
    {
      "latitude": "-23,6794",
      "longitude": "-46,6847"
    },
    {
      "latitude": "-23,6943",
      "longitude": "-46,6775"
    },
    {
      "latitude": "-23,6853",
      "longitude": "-46,6807"
    },
    {
      "latitude": "-23,6809",
      "longitude": "-46,6829"
    },
    {
      "latitude": "-23,5041",
      "longitude": "-46,6831"
    },
    {
      "latitude": "-23,5038",
      "longitude": "-46,6854"
    },
    {
      "latitude": "-23,5038",
      "longitude": "-46,6848"
    },
    {
      "latitude": "-23,5558",
      "longitude": "-46,6499"
    },
    {
      "latitude": "-23,5521",
      "longitude": "-46,6474"
    },
    {
      "latitude": "-23,5806",
      "longitude": "-46,6824"
    },
    {
      "latitude": "-23,5554",
      "longitude": "-46,6492"
    },
    {
      "latitude": "-23,5555",
      "longitude": "-46,6501"
    },
    {
      "latitude": "-23,572",
      "longitude": "-46,6656"
    },
    {
      "latitude": "-23,5482",
      "longitude": "-46,6385"
    },
    {
      "latitude": "-23,5513",
      "longitude": "-46,6458"
    },
    {
      "latitude": "-23,5503",
      "longitude": "-46,6394"
    },
    {
      "latitude": "-23,5485",
      "longitude": "-46,6392"
    },
    {
      "latitude": "-23,5827",
      "longitude": "-46,6859"
    },
    {
      "latitude": "-23,5782",
      "longitude": "-46,6753"
    },
    {
      "latitude": "-23,5741",
      "longitude": "-46,6677"
    },
    {
      "latitude": "-23,5513",
      "longitude": "-46,6459"
    },
    {
      "latitude": "-23,5511",
      "longitude": "-46,6451"
    },
    {
      "latitude": "-23,5505",
      "longitude": "-46,6448"
    },
    {
      "latitude": "-23,5503",
      "longitude": "-46,6439"
    },
    {
      "latitude": "-23,4587",
      "longitude": "-46,6151"
    },
    {
      "latitude": "-23,513",
      "longitude": "-46,427"
    },
    {
      "latitude": "-23,5186",
      "longitude": "-46,6788"
    },
    {
      "latitude": "-23,5666",
      "longitude": "-46,6587"
    },
    {
      "latitude": "-23,5812",
      "longitude": "-46,6885"
    },
    {
      "latitude": "-23,6062",
      "longitude": "-46,6968"
    },
    {
      "latitude": "-23,6125",
      "longitude": "-46,6974"
    },
    {
      "latitude": "-23,608",
      "longitude": "-46,6976"
    },
    {
      "latitude": "-23,5299",
      "longitude": "-46,5946"
    },
    {
      "latitude": "-23,5137",
      "longitude": "-46,5771"
    },
    {
      "latitude": "-23,5235",
      "longitude": "-46,6112"
    },
    {
      "latitude": "-23,5992",
      "longitude": "-46,7085"
    },
    {
      "latitude": "-23,5954",
      "longitude": "-46,7079"
    },
    {
      "latitude": "-23,6127",
      "longitude": "-46,6572"
    },
    {
      "latitude": "-23,5275",
      "longitude": "-46,7405"
    },
    {
      "latitude": "-23,531",
      "longitude": "-46,7445"
    },
    {
      "latitude": "-23,5276",
      "longitude": "-46,7407"
    },
    {
      "latitude": "-23,5262",
      "longitude": "-46,739"
    },
    {
      "latitude": "-23,5877",
      "longitude": "-46,7367"
    },
    {
      "latitude": "-23,6445",
      "longitude": "-46,6263"
    },
    {
      "latitude": "-23,5422",
      "longitude": "-46,6274"
    },
    {
      "latitude": "-23,5434",
      "longitude": "-46,6267"
    },
    {
      "latitude": "-23,6083",
      "longitude": "-46,478"
    },
    {
      "latitude": "-23,5235",
      "longitude": "-46,6802"
    },
    {
      "latitude": "-23,5223",
      "longitude": "-46,6612"
    },
    {
      "latitude": "-23,5222",
      "longitude": "-46,6631"
    },
    {
      "latitude": "-23,5229",
      "longitude": "-46,6573"
    },
    {
      "latitude": "-23,5195",
      "longitude": "-46,6741"
    },
    {
      "latitude": "-23,5185",
      "longitude": "-46,6793"
    },
    {
      "latitude": "-23,5155",
      "longitude": "-46,6905"
    },
    {
      "latitude": "-23,5213",
      "longitude": "-46,6673"
    },
    {
      "latitude": "-23,5194",
      "longitude": "-46,6752"
    },
    {
      "latitude": "-23,5219",
      "longitude": "-46,6635"
    },
    {
      "latitude": "-23,5176",
      "longitude": "-46,6794"
    },
    {
      "latitude": "-23,5225",
      "longitude": "-46,6597"
    },
    {
      "latitude": "-23,5215",
      "longitude": "-46,6682"
    },
    {
      "latitude": "-23,5167",
      "longitude": "-46,684"
    },
    {
      "latitude": "-23,5172",
      "longitude": "-46,6814"
    },
    {
      "latitude": "-23,5176",
      "longitude": "-46,6808"
    },
    {
      "latitude": "-23,5176",
      "longitude": "-46,6806"
    },
    {
      "latitude": "-23,5192",
      "longitude": "-46,677"
    },
    {
      "latitude": "-23,5195",
      "longitude": "-46,6768"
    },
    {
      "latitude": "-23,5206",
      "longitude": "-46,6707"
    },
    {
      "latitude": "-23,5208",
      "longitude": "-46,67"
    },
    {
      "latitude": "-23,5215",
      "longitude": "-46,6667"
    },
    {
      "latitude": "-23,5215",
      "longitude": "-46,6662"
    },
    {
      "latitude": "-23,5224",
      "longitude": "-46,6619"
    },
    {
      "latitude": "-23,5221",
      "longitude": "-46,6618"
    },
    {
      "latitude": "-23,5202",
      "longitude": "-46,6718"
    },
    {
      "latitude": "-23,5185",
      "longitude": "-46,6774"
    },
    {
      "latitude": "-23,5192",
      "longitude": "-46,6751"
    },
    {
      "latitude": "-23,6444",
      "longitude": "-46,7295"
    },
    {
      "latitude": "-23,4903",
      "longitude": "-46,6647"
    },
    {
      "latitude": "-23,6511",
      "longitude": "-46,7337"
    },
    {
      "latitude": "-23,6483",
      "longitude": "-46,7315"
    },
    {
      "latitude": "-23,6463",
      "longitude": "-46,7304"
    },
    {
      "latitude": "-23,6461",
      "longitude": "-46,7302"
    },
    {
      "latitude": "-23,646",
      "longitude": "-46,7303"
    },
    {
      "latitude": "-23,646",
      "longitude": "-46,7302"
    },
    {
      "latitude": "-23,6456",
      "longitude": "-46,7301"
    },
    {
      "latitude": "-23,458",
      "longitude": "-46,6041"
    },
    {
      "latitude": "-23,4948",
      "longitude": "-46,4118"
    },
    {
      "latitude": "-23,6178",
      "longitude": "-46,7018"
    },
    {
      "latitude": "-23,5861",
      "longitude": "-46,6932"
    },
    {
      "latitude": "-23,5601",
      "longitude": "-46,7117"
    },
    {
      "latitude": "-23,5975",
      "longitude": "-46,6973"
    },
    {
      "latitude": "-23,5738",
      "longitude": "-46,6634"
    },
    {
      "latitude": "-23,5899",
      "longitude": "-46,544"
    },
    {
      "latitude": "-23,4908",
      "longitude": "-46,6105"
    },
    {
      "latitude": "-23,5008",
      "longitude": "-46,6155"
    },
    {
      "latitude": "-23,5014",
      "longitude": "-46,6152"
    },
    {
      "latitude": "-23,4979",
      "longitude": "-46,6125"
    },
    {
      "latitude": "-23,4978",
      "longitude": "-46,6125"
    },
    {
      "latitude": "-23,4979",
      "longitude": "-46,6126"
    },
    {
      "latitude": "-23,5003",
      "longitude": "-46,6144"
    },
    {
      "latitude": "-23,5769",
      "longitude": "-46,6237"
    },
    {
      "latitude": "-23,573",
      "longitude": "-46,7043"
    },
    {
      "latitude": "-23,5801",
      "longitude": "-46,7019"
    },
    {
      "latitude": "-23,5727",
      "longitude": "-46,7042"
    },
    {
      "latitude": "-23,5805",
      "longitude": "-46,7009"
    },
    {
      "latitude": "-23,576",
      "longitude": "-46,7026"
    },
    {
      "latitude": "-23,5802",
      "longitude": "-46,6259"
    },
    {
      "latitude": "-23,5548",
      "longitude": "-46,7355"
    },
    {
      "latitude": "-23,5502",
      "longitude": "-46,7415"
    },
    {
      "latitude": "-23,5498",
      "longitude": "-46,7418"
    },
    {
      "latitude": "-23,6166",
      "longitude": "-46,6948"
    },
    {
      "latitude": "-23,598",
      "longitude": "-46,597"
    },
    {
      "latitude": "-23,595",
      "longitude": "-46,5976"
    },
    {
      "latitude": "-23,4838",
      "longitude": "-46,5911"
    },
    {
      "latitude": "-23,6042",
      "longitude": "-46,719"
    },
    {
      "latitude": "-23,6011",
      "longitude": "-46,7186"
    },
    {
      "latitude": "-23,5355",
      "longitude": "-46,4542"
    },
    {
      "latitude": "-23,5404",
      "longitude": "-46,7326"
    },
    {
      "latitude": "-23,6338",
      "longitude": "-46,6691"
    },
    {
      "latitude": "-23,6141",
      "longitude": "-46,6933"
    },
    {
      "latitude": "-23,6227",
      "longitude": "-46,6785"
    },
    {
      "latitude": "-23,6143",
      "longitude": "-46,699"
    },
    {
      "latitude": "-23,6138",
      "longitude": "-46,6941"
    },
    {
      "latitude": "-23,6126",
      "longitude": "-46,6972"
    },
    {
      "latitude": "-23,6122",
      "longitude": "-46,6976"
    },
    {
      "latitude": "-23,6106",
      "longitude": "-46,6978"
    },
    {
      "latitude": "-23,5921",
      "longitude": "-46,7216"
    },
    {
      "latitude": "-23,5867",
      "longitude": "-46,7243"
    },
    {
      "latitude": "-23,5094",
      "longitude": "-46,6057"
    },
    {
      "latitude": "-23,6434",
      "longitude": "-46,7339"
    },
    {
      "latitude": "-23,6447",
      "longitude": "-46,7237"
    },
    {
      "latitude": "-23,6447",
      "longitude": "-46,7029"
    },
    {
      "latitude": "-23,6442",
      "longitude": "-46,7338"
    },
    {
      "latitude": "-23,6436",
      "longitude": "-46,733"
    },
    {
      "latitude": "-23,6446",
      "longitude": "-46,7274"
    },
    {
      "latitude": "-23,6444",
      "longitude": "-46,7296"
    },
    {
      "latitude": "-23,6449",
      "longitude": "-46,7255"
    },
    {
      "latitude": "-23,6449",
      "longitude": "-46,7306"
    },
    {
      "latitude": "-23,6454",
      "longitude": "-46,7301"
    },
    {
      "latitude": "-23,6217",
      "longitude": "-46,7012"
    },
    {
      "latitude": "-23,6463",
      "longitude": "-46,7277"
    },
    {
      "latitude": "-23,6432",
      "longitude": "-46,7348"
    },
    {
      "latitude": "-23,6432",
      "longitude": "-46,7349"
    },
    {
      "latitude": "-23,6448",
      "longitude": "-46,7236"
    },
    {
      "latitude": "-23,6446",
      "longitude": "-46,724"
    },
    {
      "latitude": "-23,644",
      "longitude": "-46,7253"
    },
    {
      "latitude": "-23,6449",
      "longitude": "-46,7188"
    },
    {
      "latitude": "-23,4991",
      "longitude": "-46,4718"
    },
    {
      "latitude": "-23,6076",
      "longitude": "-46,6583"
    },
    {
      "latitude": "-23,5521",
      "longitude": "-46,741"
    },
    {
      "latitude": "-23,5511",
      "longitude": "-46,7401"
    },
    {
      "latitude": "-23,5393",
      "longitude": "-46,4499"
    },
    {
      "latitude": "-23,5529",
      "longitude": "-46,4632"
    },
    {
      "latitude": "-23,4837",
      "longitude": "-46,6865"
    },
    {
      "latitude": "-23,5396",
      "longitude": "-46,6364"
    },
    {
      "latitude": "-23,684",
      "longitude": "-46,6918"
    },
    {
      "latitude": "-23,6923",
      "longitude": "-46,6984"
    },
    {
      "latitude": "-23,664",
      "longitude": "-46,6786"
    },
    {
      "latitude": "-23,6653",
      "longitude": "-46,6781"
    },
    {
      "latitude": "-23,6754",
      "longitude": "-46,6991"
    },
    {
      "latitude": "-23,6785",
      "longitude": "-46,6849"
    },
    {
      "latitude": "-23,6828",
      "longitude": "-46,6904"
    },
    {
      "latitude": "-23,6873",
      "longitude": "-46,6932"
    },
    {
      "latitude": "-23,6617",
      "longitude": "-46,6794"
    },
    {
      "latitude": "-23,6827",
      "longitude": "-46,6903"
    },
    {
      "latitude": "-23,6137",
      "longitude": "-46,6503"
    },
    {
      "latitude": "-23,5016",
      "longitude": "-46,6872"
    },
    {
      "latitude": "-23,4757",
      "longitude": "-46,6713"
    },
    {
      "latitude": "-23,4736",
      "longitude": "-46,67"
    },
    {
      "latitude": "-23,4918",
      "longitude": "-46,6855"
    },
    {
      "latitude": "-23,5014",
      "longitude": "-46,6867"
    },
    {
      "latitude": "-23,5011",
      "longitude": "-46,6871"
    },
    {
      "latitude": "-23,4829",
      "longitude": "-46,6776"
    },
    {
      "latitude": "-23,4681",
      "longitude": "-46,6701"
    },
    {
      "latitude": "-23,4597",
      "longitude": "-46,6734"
    },
    {
      "latitude": "-23,505",
      "longitude": "-46,6886"
    },
    {
      "latitude": "-23,5305",
      "longitude": "-46,7314"
    },
    {
      "latitude": "-23,5957",
      "longitude": "-46,6548"
    },
    {
      "latitude": "-23,6072",
      "longitude": "-46,6657"
    },
    {
      "latitude": "-23,6",
      "longitude": "-46,659"
    },
    {
      "latitude": "-23,6064",
      "longitude": "-46,6647"
    },
    {
      "latitude": "-23,6058",
      "longitude": "-46,6641"
    },
    {
      "latitude": "-23,6062",
      "longitude": "-46,6645"
    },
    {
      "latitude": "-23,6049",
      "longitude": "-46,6634"
    },
    {
      "latitude": "-23,6081",
      "longitude": "-46,6663"
    },
    {
      "latitude": "-23,6002",
      "longitude": "-46,6588"
    },
    {
      "latitude": "-23,6064",
      "longitude": "-46,665"
    },
    {
      "latitude": "-23,6105",
      "longitude": "-46,6686"
    },
    {
      "latitude": "-23,6095",
      "longitude": "-46,6679"
    },
    {
      "latitude": "-23,6073",
      "longitude": "-46,6656"
    },
    {
      "latitude": "-23,6041",
      "longitude": "-46,6626"
    },
    {
      "latitude": "-23,6068",
      "longitude": "-46,6653"
    },
    {
      "latitude": "-23,6052",
      "longitude": "-46,6638"
    },
    {
      "latitude": "-23,6115",
      "longitude": "-46,6695"
    },
    {
      "latitude": "-23,6019",
      "longitude": "-46,6607"
    },
    {
      "latitude": "-23,5597",
      "longitude": "-46,6811"
    },
    {
      "latitude": "-23,5984",
      "longitude": "-46,6724"
    },
    {
      "latitude": "-23,667",
      "longitude": "-46,7271"
    },
    {
      "latitude": "-23,6551",
      "longitude": "-46,7244"
    },
    {
      "latitude": "-23,648",
      "longitude": "-46,7276"
    },
    {
      "latitude": "-23,6665",
      "longitude": "-46,7209"
    },
    {
      "latitude": "-23,6678",
      "longitude": "-46,7305"
    },
    {
      "latitude": "-23,6663",
      "longitude": "-46,7183"
    },
    {
      "latitude": "-23,6703",
      "longitude": "-46,7139"
    },
    {
      "latitude": "-23,6666",
      "longitude": "-46,7203"
    },
    {
      "latitude": "-23,6669",
      "longitude": "-46,7226"
    },
    {
      "latitude": "-23,6848",
      "longitude": "-46,7458"
    },
    {
      "latitude": "-23,6611",
      "longitude": "-46,7057"
    },
    {
      "latitude": "-23,6657",
      "longitude": "-46,7123"
    },
    {
      "latitude": "-23,6559",
      "longitude": "-46,7244"
    },
    {
      "latitude": "-23,6672",
      "longitude": "-46,7269"
    },
    {
      "latitude": "-23,6664",
      "longitude": "-46,7201"
    },
    {
      "latitude": "-23,6673",
      "longitude": "-46,7264"
    },
    {
      "latitude": "-23,666",
      "longitude": "-46,7229"
    },
    {
      "latitude": "-23,6672",
      "longitude": "-46,7208"
    },
    {
      "latitude": "-23,6651",
      "longitude": "-46,7216"
    },
    {
      "latitude": "-23,6667",
      "longitude": "-46,7191"
    },
    {
      "latitude": "-23,6672",
      "longitude": "-46,7255"
    },
    {
      "latitude": "-23,6759",
      "longitude": "-46,7344"
    },
    {
      "latitude": "-23,5135",
      "longitude": "-46,5268"
    },
    {
      "latitude": "-23,5118",
      "longitude": "-46,5269"
    },
    {
      "latitude": "-23,5145",
      "longitude": "-46,5199"
    },
    {
      "latitude": "-23,5981",
      "longitude": "-46,7202"
    },
    {
      "latitude": "-23,617",
      "longitude": "-46,7316"
    },
    {
      "latitude": "-23,5929",
      "longitude": "-46,7315"
    },
    {
      "latitude": "-23,5337",
      "longitude": "-46,7345"
    },
    {
      "latitude": "-23,4598",
      "longitude": "-46,6734"
    },
    {
      "latitude": "-23,5345",
      "longitude": "-46,6546"
    },
    {
      "latitude": "-23,532",
      "longitude": "-46,6598"
    },
    {
      "latitude": "-23,4981",
      "longitude": "-46,6114"
    },
    {
      "latitude": "-23,5024",
      "longitude": "-46,6182"
    },
    {
      "latitude": "-23,507",
      "longitude": "-46,7068"
    },
    {
      "latitude": "-23,5094",
      "longitude": "-46,7057"
    },
    {
      "latitude": "-23,4986",
      "longitude": "-46,707"
    },
    {
      "latitude": "-23,4955",
      "longitude": "-46,6109"
    },
    {
      "latitude": "-23,6139",
      "longitude": "-46,4709"
    },
    {
      "latitude": "-23,5269",
      "longitude": "-46,6727"
    },
    {
      "latitude": "-23,5299",
      "longitude": "-46,6673"
    },
    {
      "latitude": "-23,5262",
      "longitude": "-46,6755"
    },
    {
      "latitude": "-23,5274",
      "longitude": "-46,6718"
    },
    {
      "latitude": "-23,5279",
      "longitude": "-46,671"
    },
    {
      "latitude": "-23,5273",
      "longitude": "-46,6719"
    },
    {
      "latitude": "-23,5256",
      "longitude": "-46,6816"
    },
    {
      "latitude": "-23,589",
      "longitude": "-46,5678"
    },
    {
      "latitude": "-23,5724",
      "longitude": "-46,6996"
    },
    {
      "latitude": "-23,5715",
      "longitude": "-46,6962"
    },
    {
      "latitude": "-23,5724",
      "longitude": "-46,7025"
    },
    {
      "latitude": "-23,5718",
      "longitude": "-46,6982"
    },
    {
      "latitude": "-23,5713",
      "longitude": "-46,694"
    },
    {
      "latitude": "-23,5724",
      "longitude": "-46,7028"
    },
    {
      "latitude": "-23,5715",
      "longitude": "-46,6955"
    },
    {
      "latitude": "-23,5725",
      "longitude": "-46,7047"
    },
    {
      "latitude": "-23,572",
      "longitude": "-46,6995"
    },
    {
      "latitude": "-23,5715",
      "longitude": "-46,6999"
    },
    {
      "latitude": "-23,572",
      "longitude": "-46,6992"
    },
    {
      "latitude": "-23,5713",
      "longitude": "-46,6946"
    },
    {
      "latitude": "-23,5725",
      "longitude": "-46,7045"
    },
    {
      "latitude": "-23,5725",
      "longitude": "-46,7042"
    },
    {
      "latitude": "-23,5721",
      "longitude": "-46,6994"
    },
    {
      "latitude": "-23,5721",
      "longitude": "-46,6998"
    },
    {
      "latitude": "-23,572",
      "longitude": "-46,6998"
    },
    {
      "latitude": "-23,5715",
      "longitude": "-46,699"
    },
    {
      "latitude": "-23,5752",
      "longitude": "-46,6781"
    },
    {
      "latitude": "-23,5631",
      "longitude": "-46,75"
    },
    {
      "latitude": "-23,5625",
      "longitude": "-46,7492"
    },
    {
      "latitude": "-23,518",
      "longitude": "-46,7286"
    },
    {
      "latitude": "-23,5145",
      "longitude": "-46,7013"
    },
    {
      "latitude": "-23,5142",
      "longitude": "-46,7027"
    },
    {
      "latitude": "-23,5159",
      "longitude": "-46,6987"
    },
    {
      "latitude": "-23,5153",
      "longitude": "-46,697"
    },
    {
      "latitude": "-23,5154",
      "longitude": "-46,6937"
    },
    {
      "latitude": "-23,5248",
      "longitude": "-46,7438"
    },
    {
      "latitude": "-23,673",
      "longitude": "-46,6984"
    },
    {
      "latitude": "-23,5139",
      "longitude": "-46,6708"
    },
    {
      "latitude": "-23,4885",
      "longitude": "-46,6498"
    },
    {
      "latitude": "-23,5463",
      "longitude": "-46,735"
    },
    {
      "latitude": "-23,56",
      "longitude": "-46,7129"
    },
    {
      "latitude": "-23,5481",
      "longitude": "-46,7336"
    },
    {
      "latitude": "-23,5252",
      "longitude": "-46,7442"
    },
    {
      "latitude": "-23,6971",
      "longitude": "-46,6726"
    },
    {
      "latitude": "-23,697",
      "longitude": "-46,673"
    },
    {
      "latitude": "-23,6971",
      "longitude": "-46,6734"
    },
    {
      "latitude": "-23,6969",
      "longitude": "-46,6735"
    },
    {
      "latitude": "-23,6969",
      "longitude": "-46,6738"
    },
    {
      "latitude": "-23,6967",
      "longitude": "-46,6745"
    },
    {
      "latitude": "-23,5148",
      "longitude": "-46,7249"
    },
    {
      "latitude": "-23,6619",
      "longitude": "-46,769"
    },
    {
      "latitude": "-23,4977",
      "longitude": "-46,747"
    },
    {
      "latitude": "-23,5898",
      "longitude": "-46,7356"
    },
    {
      "latitude": "-23,5829",
      "longitude": "-46,7259"
    },
    {
      "latitude": "-23,5033",
      "longitude": "-46,5589"
    },
    {
      "latitude": "-23,5179",
      "longitude": "-46,6498"
    },
    {
      "latitude": "-23,5235",
      "longitude": "-46,558"
    },
    {
      "latitude": "-23,5",
      "longitude": "-46,5594"
    },
    {
      "latitude": "-23,5077",
      "longitude": "-46,5585"
    },
    {
      "latitude": "-23,512",
      "longitude": "-46,56"
    },
    {
      "latitude": "-23,5205",
      "longitude": "-46,5596"
    },
    {
      "latitude": "-23,5142",
      "longitude": "-46,5607"
    },
    {
      "latitude": "-23,5378",
      "longitude": "-46,6443"
    },
    {
      "latitude": "-23,5926",
      "longitude": "-46,6206"
    },
    {
      "latitude": "-23,5927",
      "longitude": "-46,621"
    },
    {
      "latitude": "-23,591",
      "longitude": "-46,6206"
    },
    {
      "latitude": "-23,5994",
      "longitude": "-46,6239"
    },
    {
      "latitude": "-23,5953",
      "longitude": "-46,6213"
    },
    {
      "latitude": "-23,5119",
      "longitude": "-46,5599"
    },
    {
      "latitude": "-23,5913",
      "longitude": "-46,6206"
    },
    {
      "latitude": "-23,5853",
      "longitude": "-46,6185"
    },
    {
      "latitude": "-23,5827",
      "longitude": "-46,6146"
    },
    {
      "latitude": "-23,5848",
      "longitude": "-46,6232"
    },
    {
      "latitude": "-23,582",
      "longitude": "-46,6141"
    },
    {
      "latitude": "-23,5845",
      "longitude": "-46,6177"
    },
    {
      "latitude": "-23,5804",
      "longitude": "-46,6131"
    },
    {
      "latitude": "-23,5806",
      "longitude": "-46,6136"
    },
    {
      "latitude": "-23,5804",
      "longitude": "-46,613"
    },
    {
      "latitude": "-23,5854",
      "longitude": "-46,6182"
    },
    {
      "latitude": "-23,5799",
      "longitude": "-46,6127"
    },
    {
      "latitude": "-23,5818",
      "longitude": "-46,6144"
    },
    {
      "latitude": "-23,595",
      "longitude": "-46,6216"
    },
    {
      "latitude": "-23,5806",
      "longitude": "-46,6106"
    },
    {
      "latitude": "-23,5897",
      "longitude": "-46,6203"
    },
    {
      "latitude": "-23,5943",
      "longitude": "-46,6214"
    },
    {
      "latitude": "-23,5865",
      "longitude": "-46,6192"
    },
    {
      "latitude": "-23,5904",
      "longitude": "-46,6201"
    },
    {
      "latitude": "-23,6514",
      "longitude": "-46,7203"
    },
    {
      "latitude": "-23,638",
      "longitude": "-46,6623"
    },
    {
      "latitude": "-23,6097",
      "longitude": "-46,7486"
    },
    {
      "latitude": "-23,5249",
      "longitude": "-46,7411"
    },
    {
      "latitude": "-23,5339",
      "longitude": "-46,7343"
    },
    {
      "latitude": "-23,5307",
      "longitude": "-46,7372"
    },
    {
      "latitude": "-23,5938",
      "longitude": "-46,61"
    },
    {
      "latitude": "-23,5884",
      "longitude": "-46,5891"
    },
    {
      "latitude": "-23,6009",
      "longitude": "-46,7504"
    },
    {
      "latitude": "-23,5558",
      "longitude": "-46,6715"
    },
    {
      "latitude": "-23,4953",
      "longitude": "-46,456"
    },
    {
      "latitude": "-23,5187",
      "longitude": "-46,7029"
    },
    {
      "latitude": "-23,6198",
      "longitude": "-46,6983"
    },
    {
      "latitude": "-23,6217",
      "longitude": "-46,6995"
    },
    {
      "latitude": "-23,599",
      "longitude": "-46,6835"
    },
    {
      "latitude": "-23,5578",
      "longitude": "-46,7562"
    },
    {
      "latitude": "-23,5583",
      "longitude": "-46,7576"
    },
    {
      "latitude": "-23,5539",
      "longitude": "-46,6715"
    },
    {
      "latitude": "-23,5552",
      "longitude": "-46,6684"
    },
    {
      "latitude": "-23,5558",
      "longitude": "-46,6672"
    },
    {
      "latitude": "-23,5955",
      "longitude": "-46,6214"
    },
    {
      "latitude": "-23,5969",
      "longitude": "-46,5811"
    },
    {
      "latitude": "-23,4708",
      "longitude": "-46,735"
    },
    {
      "latitude": "-23,5526",
      "longitude": "-46,6744"
    },
    {
      "latitude": "-23,5218",
      "longitude": "-46,6587"
    },
    {
      "latitude": "-23,6125",
      "longitude": "-46,7031"
    },
    {
      "latitude": "-23,5796",
      "longitude": "-46,7108"
    },
    {
      "latitude": "-23,5859",
      "longitude": "-46,698"
    },
    {
      "latitude": "-23,5864",
      "longitude": "-46,6952"
    },
    {
      "latitude": "-23,5866",
      "longitude": "-46,6936"
    },
    {
      "latitude": "-23,5866",
      "longitude": "-46,6944"
    },
    {
      "latitude": "-23,5866",
      "longitude": "-46,6955"
    },
    {
      "latitude": "-23,5866",
      "longitude": "-46,6956"
    },
    {
      "latitude": "-23,5863",
      "longitude": "-46,6974"
    },
    {
      "latitude": "-23,6547",
      "longitude": "-46,6025"
    },
    {
      "latitude": "-23,5769",
      "longitude": "-46,5163"
    },
    {
      "latitude": "-23,5362",
      "longitude": "-46,4675"
    },
    {
      "latitude": "-23,5968",
      "longitude": "-46,6907"
    },
    {
      "latitude": "-23,6134",
      "longitude": "-46,6713"
    },
    {
      "latitude": "-23,6128",
      "longitude": "-46,671"
    },
    {
      "latitude": "-23,5983",
      "longitude": "-46,6888"
    },
    {
      "latitude": "-23,6042",
      "longitude": "-46,6799"
    },
    {
      "latitude": "-23,5995",
      "longitude": "-46,6851"
    },
    {
      "latitude": "-23,6022",
      "longitude": "-46,682"
    },
    {
      "latitude": "-23,6016",
      "longitude": "-46,6829"
    },
    {
      "latitude": "-23,615",
      "longitude": "-46,6682"
    },
    {
      "latitude": "-23,6009",
      "longitude": "-46,683"
    },
    {
      "latitude": "-23,6087",
      "longitude": "-46,6767"
    },
    {
      "latitude": "-23,5989",
      "longitude": "-46,6871"
    },
    {
      "latitude": "-23,6226",
      "longitude": "-46,6522"
    },
    {
      "latitude": "-23,6192",
      "longitude": "-46,6582"
    },
    {
      "latitude": "-23,6166",
      "longitude": "-46,6632"
    },
    {
      "latitude": "-23,6149",
      "longitude": "-46,668"
    },
    {
      "latitude": "-23,6164",
      "longitude": "-46,6636"
    },
    {
      "latitude": "-23,6154",
      "longitude": "-46,6673"
    },
    {
      "latitude": "-23,6141",
      "longitude": "-46,669"
    },
    {
      "latitude": "-23,6175",
      "longitude": "-46,6617"
    },
    {
      "latitude": "-23,6148",
      "longitude": "-46,6681"
    },
    {
      "latitude": "-23,5667",
      "longitude": "-46,7539"
    },
    {
      "latitude": "-23,5975",
      "longitude": "-46,5411"
    },
    {
      "latitude": "-23,5485",
      "longitude": "-46,6266"
    },
    {
      "latitude": "-23,5546",
      "longitude": "-46,6272"
    },
    {
      "latitude": "-23,5437",
      "longitude": "-46,6294"
    },
    {
      "latitude": "-23,5481",
      "longitude": "-46,6275"
    },
    {
      "latitude": "-23,5519",
      "longitude": "-46,6265"
    },
    {
      "latitude": "-23,5392",
      "longitude": "-46,6271"
    },
    {
      "latitude": "-23,5392",
      "longitude": "-46,6276"
    },
    {
      "latitude": "-23,532",
      "longitude": "-46,6254"
    },
    {
      "latitude": "-23,5837",
      "longitude": "-46,5994"
    },
    {
      "latitude": "-23,5703",
      "longitude": "-46,6057"
    },
    {
      "latitude": "-23,536",
      "longitude": "-46,6331"
    },
    {
      "latitude": "-23,5849",
      "longitude": "-46,5991"
    },
    {
      "latitude": "-23,5565",
      "longitude": "-46,6222"
    },
    {
      "latitude": "-23,581",
      "longitude": "-46,5993"
    },
    {
      "latitude": "-23,5344",
      "longitude": "-46,625"
    },
    {
      "latitude": "-23,5272",
      "longitude": "-46,6286"
    },
    {
      "latitude": "-23,5588",
      "longitude": "-46,6154"
    },
    {
      "latitude": "-23,5877",
      "longitude": "-46,5967"
    },
    {
      "latitude": "-23,5527",
      "longitude": "-46,6254"
    },
    {
      "latitude": "-23,5413",
      "longitude": "-46,6285"
    },
    {
      "latitude": "-23,5862",
      "longitude": "-46,5988"
    },
    {
      "latitude": "-23,5579",
      "longitude": "-46,6179"
    },
    {
      "latitude": "-23,5356",
      "longitude": "-46,626"
    },
    {
      "latitude": "-23,5826",
      "longitude": "-46,5998"
    },
    {
      "latitude": "-23,5352",
      "longitude": "-46,6253"
    },
    {
      "latitude": "-23,5634",
      "longitude": "-46,6122"
    },
    {
      "latitude": "-23,5375",
      "longitude": "-46,6268"
    },
    {
      "latitude": "-23,5269",
      "longitude": "-46,6283"
    },
    {
      "latitude": "-23,5376",
      "longitude": "-46,6264"
    },
    {
      "latitude": "-23,5684",
      "longitude": "-46,6089"
    },
    {
      "latitude": "-23,5785",
      "longitude": "-46,5999"
    },
    {
      "latitude": "-23,5428",
      "longitude": "-46,6287"
    },
    {
      "latitude": "-23,5416",
      "longitude": "-46,6281"
    },
    {
      "latitude": "-23,5862",
      "longitude": "-46,598"
    },
    {
      "latitude": "-23,5629",
      "longitude": "-46,6116"
    },
    {
      "latitude": "-23,5523",
      "longitude": "-46,6259"
    },
    {
      "latitude": "-23,5248",
      "longitude": "-46,6298"
    },
    {
      "latitude": "-23,5245",
      "longitude": "-46,6305"
    },
    {
      "latitude": "-23,5327",
      "longitude": "-46,6253"
    },
    {
      "latitude": "-23,5477",
      "longitude": "-46,6291"
    },
    {
      "latitude": "-23,537",
      "longitude": "-46,6266"
    },
    {
      "latitude": "-23,5371",
      "longitude": "-46,6261"
    },
    {
      "latitude": "-23,5361",
      "longitude": "-46,6262"
    },
    {
      "latitude": "-23,5348",
      "longitude": "-46,6256"
    },
    {
      "latitude": "-23,5341",
      "longitude": "-46,6248"
    },
    {
      "latitude": "-23,2951",
      "longitude": "-47,6754"
    },
    {
      "latitude": "-23,5271",
      "longitude": "-46,6286"
    },
    {
      "latitude": "-23,5216",
      "longitude": "-46,6367"
    },
    {
      "latitude": "-23,5351",
      "longitude": "-46,6252"
    },
    {
      "latitude": "-23,5574",
      "longitude": "-46,6185"
    },
    {
      "latitude": "-23,6277",
      "longitude": "-46,6193"
    },
    {
      "latitude": "-23,5035",
      "longitude": "-46,7334"
    },
    {
      "latitude": "-23,5051",
      "longitude": "-46,7329"
    },
    {
      "latitude": "-23,4816",
      "longitude": "-46,3786"
    },
    {
      "latitude": "-23,4894",
      "longitude": "-46,6754"
    },
    {
      "latitude": "-23,6086",
      "longitude": "-46,5912"
    },
    {
      "latitude": "-23,67",
      "longitude": "-46,7146"
    },
    {
      "latitude": "-23,5711",
      "longitude": "-46,6041"
    },
    {
      "latitude": "-23,5308",
      "longitude": "-46,7478"
    },
    {
      "latitude": "-23,6648",
      "longitude": "-46,71"
    },
    {
      "latitude": "-23,6672",
      "longitude": "-46,7057"
    },
    {
      "latitude": "-23,5829",
      "longitude": "-46,6917"
    },
    {
      "latitude": "-23,5651",
      "longitude": "-46,7031"
    },
    {
      "latitude": "-23,5412",
      "longitude": "-46,7374"
    },
    {
      "latitude": "-23,5683",
      "longitude": "-46,7018"
    },
    {
      "latitude": "-23,6942",
      "longitude": "-46,6824"
    },
    {
      "latitude": "-23,6742",
      "longitude": "-46,7001"
    },
    {
      "latitude": "-23,6023",
      "longitude": "-46,6955"
    },
    {
      "latitude": "-23,6251",
      "longitude": "-46,7076"
    },
    {
      "latitude": "-23,6386",
      "longitude": "-46,7217"
    },
    {
      "latitude": "-23,6255",
      "longitude": "-46,7086"
    },
    {
      "latitude": "-23,6671",
      "longitude": "-46,7057"
    },
    {
      "latitude": "-23,6415",
      "longitude": "-46,7242"
    },
    {
      "latitude": "-23,6528",
      "longitude": "-46,7241"
    },
    {
      "latitude": "-23,5204",
      "longitude": "-46,747"
    },
    {
      "latitude": "-23,6182",
      "longitude": "-46,7003"
    },
    {
      "latitude": "-23,5604",
      "longitude": "-46,712"
    },
    {
      "latitude": "-23,5723",
      "longitude": "-46,7011"
    },
    {
      "latitude": "-23,652",
      "longitude": "-46,7221"
    },
    {
      "latitude": "-23,6845",
      "longitude": "-46,6919"
    },
    {
      "latitude": "-23,5791",
      "longitude": "-46,6939"
    },
    {
      "latitude": "-23,6647",
      "longitude": "-46,7094"
    },
    {
      "latitude": "-23,5629",
      "longitude": "-46,7039"
    },
    {
      "latitude": "-23,6751",
      "longitude": "-46,6993"
    },
    {
      "latitude": "-23,6755",
      "longitude": "-46,6996"
    },
    {
      "latitude": "-23,5428",
      "longitude": "-46,7356"
    },
    {
      "latitude": "-23,6127",
      "longitude": "-46,6986"
    },
    {
      "latitude": "-23,6754",
      "longitude": "-46,6997"
    },
    {
      "latitude": "-23,6213",
      "longitude": "-46,7009"
    },
    {
      "latitude": "-23,6441",
      "longitude": "-46,7253"
    },
    {
      "latitude": "-23,5272",
      "longitude": "-46,7473"
    },
    {
      "latitude": "-23,5943",
      "longitude": "-46,6923"
    },
    {
      "latitude": "-23,678",
      "longitude": "-46,698"
    },
    {
      "latitude": "-23,6743",
      "longitude": "-46,7007"
    },
    {
      "latitude": "-23,6058",
      "longitude": "-46,697"
    },
    {
      "latitude": "-23,5933",
      "longitude": "-46,6925"
    },
    {
      "latitude": "-23,5924",
      "longitude": "-46,5978"
    },
    {
      "latitude": "-23,5956",
      "longitude": "-46,5975"
    },
    {
      "latitude": "-23,5988",
      "longitude": "-46,5975"
    },
    {
      "latitude": "-23,5888",
      "longitude": "-46,5982"
    },
    {
      "latitude": "-23,59",
      "longitude": "-46,5981"
    },
    {
      "latitude": "-23,6017",
      "longitude": "-46,5988"
    },
    {
      "latitude": "-23,5874",
      "longitude": "-46,5983"
    },
    {
      "latitude": "-23,5505",
      "longitude": "-46,6333"
    },
    {
      "latitude": "-23,7532",
      "longitude": "-46,6813"
    },
    {
      "latitude": "-23,5707",
      "longitude": "-46,611"
    },
    {
      "latitude": "-23,5169",
      "longitude": "-46,5158"
    },
    {
      "latitude": "-23,5151",
      "longitude": "-46,52"
    },
    {
      "latitude": "-23,6663",
      "longitude": "-46,653"
    },
    {
      "latitude": "-23,6624",
      "longitude": "-46,6627"
    },
    {
      "latitude": "-23,6584",
      "longitude": "-46,6667"
    },
    {
      "latitude": "-23,6684",
      "longitude": "-46,6513"
    },
    {
      "latitude": "-23,5168",
      "longitude": "-46,6245"
    },
    {
      "latitude": "-23,53",
      "longitude": "-46,6254"
    },
    {
      "latitude": "-23,5301",
      "longitude": "-46,6257"
    },
    {
      "latitude": "-23,5274",
      "longitude": "-46,6256"
    },
    {
      "latitude": "-23,5115",
      "longitude": "-46,6251"
    },
    {
      "latitude": "-23,5232",
      "longitude": "-46,6255"
    },
    {
      "latitude": "-23,5254",
      "longitude": "-46,6256"
    },
    {
      "latitude": "-23,5259",
      "longitude": "-46,6256"
    },
    {
      "latitude": "-23,5031",
      "longitude": "-46,6249"
    },
    {
      "latitude": "-23,5285",
      "longitude": "-46,6257"
    },
    {
      "latitude": "-23,502",
      "longitude": "-46,6246"
    },
    {
      "latitude": "-23,5132",
      "longitude": "-46,6249"
    },
    {
      "latitude": "-23,5064",
      "longitude": "-46,625"
    },
    {
      "latitude": "-23,5063",
      "longitude": "-46,6247"
    },
    {
      "latitude": "-23,5053",
      "longitude": "-46,625"
    },
    {
      "latitude": "-23,5265",
      "longitude": "-46,6256"
    },
    {
      "latitude": "-23,5314",
      "longitude": "-46,6258"
    },
    {
      "latitude": "-23,5072",
      "longitude": "-46,6248"
    },
    {
      "latitude": "-23,5042",
      "longitude": "-46,6246"
    },
    {
      "latitude": "-23,5053",
      "longitude": "-46,6247"
    },
    {
      "latitude": "-23,5115",
      "longitude": "-46,6246"
    },
    {
      "latitude": "-23,5325",
      "longitude": "-46,6253"
    },
    {
      "latitude": "-23,5162",
      "longitude": "-46,625"
    },
    {
      "latitude": "-23,505",
      "longitude": "-46,625"
    },
    {
      "latitude": "-23,5058",
      "longitude": "-46,625"
    },
    {
      "latitude": "-23,5057",
      "longitude": "-46,6246"
    },
    {
      "latitude": "-23,5163",
      "longitude": "-46,6237"
    },
    {
      "latitude": "-23,5311",
      "longitude": "-46,6257"
    },
    {
      "latitude": "-23,5161",
      "longitude": "-46,625"
    },
    {
      "latitude": "-23,6067",
      "longitude": "-46,6715"
    },
    {
      "latitude": "-23,5713",
      "longitude": "-46,7397"
    },
    {
      "latitude": "-23,531",
      "longitude": "-46,6257"
    },
    {
      "latitude": "-23,5664",
      "longitude": "-46,7437"
    },
    {
      "latitude": "-23,5685",
      "longitude": "-46,7421"
    },
    {
      "latitude": "-23,568",
      "longitude": "-46,7428"
    },
    {
      "latitude": "-23,5458",
      "longitude": "-46,5435"
    },
    {
      "latitude": "-23,5818",
      "longitude": "-46,6849"
    },
    {
      "latitude": "-23,5806",
      "longitude": "-46,6835"
    },
    {
      "latitude": "-23,5813",
      "longitude": "-46,6844"
    },
    {
      "latitude": "-23,583",
      "longitude": "-46,6864"
    },
    {
      "latitude": "-23,5806",
      "longitude": "-46,6834"
    },
    {
      "latitude": "-23,5802",
      "longitude": "-46,6834"
    },
    {
      "latitude": "-23,5352",
      "longitude": "-46,5755"
    },
    {
      "latitude": "-23,5381",
      "longitude": "-46,599"
    },
    {
      "latitude": "-23,5362",
      "longitude": "-46,5869"
    },
    {
      "latitude": "-23,5365",
      "longitude": "-46,5882"
    },
    {
      "latitude": "-23,5368",
      "longitude": "-46,5903"
    },
    {
      "latitude": "-23,539",
      "longitude": "-46,6067"
    },
    {
      "latitude": "-23,54",
      "longitude": "-46,6116"
    },
    {
      "latitude": "-23,5401",
      "longitude": "-46,6116"
    },
    {
      "latitude": "-23,5395",
      "longitude": "-46,6095"
    },
    {
      "latitude": "-23,5388",
      "longitude": "-46,6052"
    },
    {
      "latitude": "-23,535",
      "longitude": "-46,5791"
    },
    {
      "latitude": "-23,5349",
      "longitude": "-46,579"
    },
    {
      "latitude": "-23,5403",
      "longitude": "-46,6123"
    },
    {
      "latitude": "-23,5398",
      "longitude": "-46,6105"
    },
    {
      "latitude": "-23,5407",
      "longitude": "-46,6129"
    },
    {
      "latitude": "-23,5386",
      "longitude": "-46,6042"
    },
    {
      "latitude": "-23,5336",
      "longitude": "-46,5656"
    },
    {
      "latitude": "-23,5381",
      "longitude": "-46,5989"
    },
    {
      "latitude": "-23,54",
      "longitude": "-46,6111"
    },
    {
      "latitude": "-23,5318",
      "longitude": "-46,5601"
    },
    {
      "latitude": "-23,5347",
      "longitude": "-46,5687"
    },
    {
      "latitude": "-23,5373",
      "longitude": "-46,589"
    },
    {
      "latitude": "-23,541",
      "longitude": "-46,6137"
    },
    {
      "latitude": "-23,5353",
      "longitude": "-46,5831"
    },
    {
      "latitude": "-23,5367",
      "longitude": "-46,5893"
    },
    {
      "latitude": "-23,535",
      "longitude": "-46,5821"
    },
    {
      "latitude": "-23,5399",
      "longitude": "-46,6106"
    },
    {
      "latitude": "-23,5399",
      "longitude": "-46,6113"
    },
    {
      "latitude": "-23,5353",
      "longitude": "-46,5827"
    },
    {
      "latitude": "-23,4237",
      "longitude": "-46,59"
    },
    {
      "latitude": "-23,4618",
      "longitude": "-46,6029"
    },
    {
      "latitude": "-23,6235",
      "longitude": "-46,6487"
    },
    {
      "latitude": "-23,5559",
      "longitude": "-46,5775"
    },
    {
      "latitude": "-23,5284",
      "longitude": "-46,585"
    },
    {
      "latitude": "-23,5268",
      "longitude": "-46,5749"
    },
    {
      "latitude": "-23,5313",
      "longitude": "-46,5276"
    },
    {
      "latitude": "-23,5323",
      "longitude": "-46,529"
    },
    {
      "latitude": "-23,5322",
      "longitude": "-46,5305"
    },
    {
      "latitude": "-23,5315",
      "longitude": "-46,5218"
    },
    {
      "latitude": "-23,537",
      "longitude": "-46,52"
    },
    {
      "latitude": "-23,5335",
      "longitude": "-46,5404"
    },
    {
      "latitude": "-23,4872",
      "longitude": "-46,7147"
    },
    {
      "latitude": "-23,4837",
      "longitude": "-46,7168"
    },
    {
      "latitude": "-23,647",
      "longitude": "-46,779"
    },
    {
      "latitude": "-23,6382",
      "longitude": "-46,7409"
    },
    {
      "latitude": "-23,6461",
      "longitude": "-46,7533"
    },
    {
      "latitude": "-23,5084",
      "longitude": "-46,7527"
    },
    {
      "latitude": "-23,5079",
      "longitude": "-46,7493"
    },
    {
      "latitude": "-23,5353",
      "longitude": "-46,4643"
    },
    {
      "latitude": "-23,5204",
      "longitude": "-46,5013"
    },
    {
      "latitude": "-23,5205",
      "longitude": "-46,5018"
    },
    {
      "latitude": "-23,5815",
      "longitude": "-46,6842"
    },
    {
      "latitude": "-23,5627",
      "longitude": "-46,6943"
    },
    {
      "latitude": "-23,5822",
      "longitude": "-46,6837"
    },
    {
      "latitude": "-23,5774",
      "longitude": "-46,6869"
    },
    {
      "latitude": "-23,5663",
      "longitude": "-46,6946"
    },
    {
      "latitude": "-23,5714",
      "longitude": "-46,6908"
    },
    {
      "latitude": "-23,5138",
      "longitude": "-46,6533"
    },
    {
      "latitude": "-23,5138",
      "longitude": "-46,6534"
    },
    {
      "latitude": "-23,5139",
      "longitude": "-46,6534"
    },
    {
      "latitude": "-23,5164",
      "longitude": "-46,6539"
    },
    {
      "latitude": "-23,5061",
      "longitude": "-46,6427"
    },
    {
      "latitude": "-23,5039",
      "longitude": "-46,6281"
    },
    {
      "latitude": "-23,5038",
      "longitude": "-46,6302"
    },
    {
      "latitude": "-23,5069",
      "longitude": "-46,6468"
    },
    {
      "latitude": "-23,5133",
      "longitude": "-46,6537"
    },
    {
      "latitude": "-23,5135",
      "longitude": "-46,6537"
    },
    {
      "latitude": "-23,5648",
      "longitude": "-46,677"
    },
    {
      "latitude": "-23,5661",
      "longitude": "-46,6758"
    },
    {
      "latitude": "-23,574",
      "longitude": "-46,667"
    },
    {
      "latitude": "-23,5655",
      "longitude": "-46,6767"
    },
    {
      "latitude": "-23,5655",
      "longitude": "-46,6767"
    },
    {
      "latitude": "-23,5649",
      "longitude": "-46,677"
    },
    {
      "latitude": "-23,488",
      "longitude": "-46,4013"
    },
    {
      "latitude": "-23,6126",
      "longitude": "-46,628"
    },
    {
      "latitude": "-23,4867",
      "longitude": "-46,5904"
    },
    {
      "latitude": "-23,5729",
      "longitude": "-46,6431"
    },
    {
      "latitude": "-23,5729",
      "longitude": "-46,643"
    },
    {
      "latitude": "-23,5728",
      "longitude": "-46,6432"
    },
    {
      "latitude": "-23,5726",
      "longitude": "-46,643"
    },
    {
      "latitude": "-23,572",
      "longitude": "-46,6435"
    },
    {
      "latitude": "-23,5738",
      "longitude": "-46,6424"
    },
    {
      "latitude": "-23,6752",
      "longitude": "-46,7432"
    },
    {
      "latitude": "-23,4877",
      "longitude": "-46,7175"
    },
    {
      "latitude": "-23,751",
      "longitude": "-46,6882"
    },
    {
      "latitude": "-23,5596",
      "longitude": "-46,5108"
    },
    {
      "latitude": "-23,6174",
      "longitude": "-46,6619"
    },
    {
      "latitude": "-23,6132",
      "longitude": "-46,6709"
    },
    {
      "latitude": "-23,5266",
      "longitude": "-46,6672"
    },
    {
      "latitude": "-23,5265",
      "longitude": "-46,6687"
    },
    {
      "latitude": "-23,6981",
      "longitude": "-46,7149"
    },
    {
      "latitude": "-23,5176",
      "longitude": "-46,6383"
    },
    {
      "latitude": "-23,5178",
      "longitude": "-46,6391"
    },
    {
      "latitude": "-23,519",
      "longitude": "-46,6301"
    },
    {
      "latitude": "-23,5184",
      "longitude": "-46,6304"
    },
    {
      "latitude": "-23,5861",
      "longitude": "-46,5048"
    },
    {
      "latitude": "-23,5246",
      "longitude": "-46,5558"
    },
    {
      "latitude": "-23,5481",
      "longitude": "-46,526"
    },
    {
      "latitude": "-23,5441",
      "longitude": "-46,5312"
    },
    {
      "latitude": "-23,5445",
      "longitude": "-46,5313"
    },
    {
      "latitude": "-23,5409",
      "longitude": "-46,5294"
    },
    {
      "latitude": "-23,5399",
      "longitude": "-46,5428"
    },
    {
      "latitude": "-23,5619",
      "longitude": "-46,5102"
    },
    {
      "latitude": "-23,5447",
      "longitude": "-46,5291"
    },
    {
      "latitude": "-23,5586",
      "longitude": "-46,5137"
    },
    {
      "latitude": "-23,5437",
      "longitude": "-46,5308"
    },
    {
      "latitude": "-23,5445",
      "longitude": "-46,5301"
    },
    {
      "latitude": "-23,5527",
      "longitude": "-46,52"
    },
    {
      "latitude": "-23,5537",
      "longitude": "-46,5185"
    },
    {
      "latitude": "-23,5418",
      "longitude": "-46,5353"
    },
    {
      "latitude": "-23,5463",
      "longitude": "-46,5285"
    },
    {
      "latitude": "-23,5498",
      "longitude": "-46,5246"
    },
    {
      "latitude": "-23,5469",
      "longitude": "-46,5269"
    },
    {
      "latitude": "-23,525",
      "longitude": "-46,5571"
    },
    {
      "latitude": "-23,5647",
      "longitude": "-46,5081"
    },
    {
      "latitude": "-23,5754",
      "longitude": "-46,5025"
    },
    {
      "latitude": "-23,5558",
      "longitude": "-46,5164"
    },
    {
      "latitude": "-23,5623",
      "longitude": "-46,5105"
    },
    {
      "latitude": "-23,5726",
      "longitude": "-46,504"
    },
    {
      "latitude": "-23,5869",
      "longitude": "-46,4826"
    },
    {
      "latitude": "-23,535",
      "longitude": "-46,5483"
    },
    {
      "latitude": "-23,582",
      "longitude": "-46,4907"
    },
    {
      "latitude": "-23,582",
      "longitude": "-46,4906"
    },
    {
      "latitude": "-23,5624",
      "longitude": "-46,5105"
    },
    {
      "latitude": "-23,5503",
      "longitude": "-46,5233"
    },
    {
      "latitude": "-23,5511",
      "longitude": "-46,5217"
    },
    {
      "latitude": "-23,568",
      "longitude": "-46,5059"
    },
    {
      "latitude": "-23,5581",
      "longitude": "-46,5142"
    },
    {
      "latitude": "-23,5558",
      "longitude": "-46,5171"
    },
    {
      "latitude": "-23,5457",
      "longitude": "-46,5281"
    },
    {
      "latitude": "-23,6133",
      "longitude": "-46,6581"
    },
    {
      "latitude": "-23,5664",
      "longitude": "-46,5073"
    },
    {
      "latitude": "-23,5011",
      "longitude": "-46,6843"
    },
    {
      "latitude": "-23,5038",
      "longitude": "-46,6846"
    },
    {
      "latitude": "-23,4957",
      "longitude": "-46,6819"
    },
    {
      "latitude": "-23,5022",
      "longitude": "-46,6844"
    },
    {
      "latitude": "-23,5024",
      "longitude": "-46,6845"
    },
    {
      "latitude": "-23,5029",
      "longitude": "-46,6846"
    },
    {
      "latitude": "-23,5032",
      "longitude": "-46,6847"
    },
    {
      "latitude": "-23,5035",
      "longitude": "-46,6848"
    },
    {
      "latitude": "-23,5035",
      "longitude": "-46,6846"
    },
    {
      "latitude": "-23,5036",
      "longitude": "-46,6847"
    },
    {
      "latitude": "-23,5037",
      "longitude": "-46,6847"
    },
    {
      "latitude": "-23,4955",
      "longitude": "-46,6774"
    },
    {
      "latitude": "-23,5032",
      "longitude": "-46,6846"
    },
    {
      "latitude": "-23,4991",
      "longitude": "-46,6838"
    },
    {
      "latitude": "-23,5862",
      "longitude": "-46,6673"
    },
    {
      "latitude": "-23,585",
      "longitude": "-46,6701"
    },
    {
      "latitude": "-23,5862",
      "longitude": "-46,6672"
    },
    {
      "latitude": "-23,5282",
      "longitude": "-46,5095"
    },
    {
      "latitude": "-23,5279",
      "longitude": "-46,5092"
    },
    {
      "latitude": "-23,5316",
      "longitude": "-46,5213"
    },
    {
      "latitude": "-23,5291",
      "longitude": "-46,5051"
    },
    {
      "latitude": "-23,4557",
      "longitude": "-46,59"
    },
    {
      "latitude": "-23,4562",
      "longitude": "-46,5902"
    },
    {
      "latitude": "-23,526",
      "longitude": "-46,672"
    },
    {
      "latitude": "-23,5211",
      "longitude": "-46,6682"
    },
    {
      "latitude": "-23,5217",
      "longitude": "-46,6677"
    },
    {
      "latitude": "-23,5262",
      "longitude": "-46,6723"
    },
    {
      "latitude": "-23,5475",
      "longitude": "-46,583"
    },
    {
      "latitude": "-23,6085",
      "longitude": "-46,5911"
    },
    {
      "latitude": "-23,611",
      "longitude": "-46,583"
    },
    {
      "latitude": "-23,6108",
      "longitude": "-46,5833"
    },
    {
      "latitude": "-23,6109",
      "longitude": "-46,5838"
    },
    {
      "latitude": "-23,6109",
      "longitude": "-46,5831"
    },
    {
      "latitude": "-23,5052",
      "longitude": "-46,6263"
    },
    {
      "latitude": "-23,5169",
      "longitude": "-46,7356"
    },
    {
      "latitude": "-23,5124",
      "longitude": "-46,7374"
    },
    {
      "latitude": "-23,5539",
      "longitude": "-46,6263"
    },
    {
      "latitude": "-23,5418",
      "longitude": "-46,5804"
    },
    {
      "latitude": "-23,5388",
      "longitude": "-46,5715"
    },
    {
      "latitude": "-23,5477",
      "longitude": "-46,6031"
    },
    {
      "latitude": "-23,5523",
      "longitude": "-46,6217"
    },
    {
      "latitude": "-23,5525",
      "longitude": "-46,6164"
    },
    {
      "latitude": "-23,5521",
      "longitude": "-46,6243"
    },
    {
      "latitude": "-23,5521",
      "longitude": "-46,6245"
    },
    {
      "latitude": "-23,5515",
      "longitude": "-46,6247"
    },
    {
      "latitude": "-23,5325",
      "longitude": "-46,5509"
    },
    {
      "latitude": "-23,6092",
      "longitude": "-46,5011"
    },
    {
      "latitude": "-23,5272",
      "longitude": "-46,5556"
    },
    {
      "latitude": "-23,5273",
      "longitude": "-46,5552"
    },
    {
      "latitude": "-23,5249",
      "longitude": "-46,5571"
    },
    {
      "latitude": "-23,523",
      "longitude": "-46,5584"
    },
    {
      "latitude": "-23,5296",
      "longitude": "-46,5538"
    },
    {
      "latitude": "-23,5274",
      "longitude": "-46,5552"
    },
    {
      "latitude": "-23,5276",
      "longitude": "-46,5553"
    },
    {
      "latitude": "-23,5292",
      "longitude": "-46,5539"
    },
    {
      "latitude": "-23,5349",
      "longitude": "-46,5482"
    },
    {
      "latitude": "-23,5268",
      "longitude": "-46,5559"
    },
    {
      "latitude": "-23,4785",
      "longitude": "-46,6213"
    },
    {
      "latitude": "-23,6192",
      "longitude": "-46,6827"
    },
    {
      "latitude": "-23,5663",
      "longitude": "-46,7106"
    },
    {
      "latitude": "-23,5678",
      "longitude": "-46,7078"
    },
    {
      "latitude": "-23,5743",
      "longitude": "-46,4761"
    },
    {
      "latitude": "-23,6292",
      "longitude": "-46,6303"
    },
    {
      "latitude": "-23,5705",
      "longitude": "-46,4491"
    },
    {
      "latitude": "-23,6429",
      "longitude": "-46,6992"
    },
    {
      "latitude": "-23,5488",
      "longitude": "-46,6389"
    },
    {
      "latitude": "-23,5606",
      "longitude": "-46,6399"
    },
    {
      "latitude": "-23,585",
      "longitude": "-46,6534"
    },
    {
      "latitude": "-23,5826",
      "longitude": "-46,6516"
    },
    {
      "latitude": "-23,5095",
      "longitude": "-46,6176"
    },
    {
      "latitude": "-23,5703",
      "longitude": "-46,7115"
    },
    {
      "latitude": "-23,5842",
      "longitude": "-46,6537"
    },
    {
      "latitude": "-23,5888",
      "longitude": "-46,652"
    },
    {
      "latitude": "-23,5172",
      "longitude": "-46,6704"
    },
    {
      "latitude": "-23,6177",
      "longitude": "-46,6818"
    },
    {
      "latitude": "-23,6275",
      "longitude": "-46,688"
    },
    {
      "latitude": "-23,7933",
      "longitude": "-46,7293"
    },
    {
      "latitude": "-23,6001",
      "longitude": "-46,6513"
    },
    {
      "latitude": "-23,6005",
      "longitude": "-46,6513"
    },
    {
      "latitude": "-23,6245",
      "longitude": "-46,6943"
    },
    {
      "latitude": "-23,5367",
      "longitude": "-46,6424"
    },
    {
      "latitude": "-23,4369",
      "longitude": "-46,7208"
    },
    {
      "latitude": "-23,429",
      "longitude": "-46,7226"
    },
    {
      "latitude": "-23,507",
      "longitude": "-46,7156"
    },
    {
      "latitude": "-23,5846",
      "longitude": "-46,5843"
    },
    {
      "latitude": "-23,5834",
      "longitude": "-46,5753"
    },
    {
      "latitude": "-23,5822",
      "longitude": "-46,5629"
    },
    {
      "latitude": "-23,5859",
      "longitude": "-46,5891"
    },
    {
      "latitude": "-23,6265",
      "longitude": "-46,6294"
    },
    {
      "latitude": "-23,6128",
      "longitude": "-46,6277"
    },
    {
      "latitude": "-23,5239",
      "longitude": "-46,6113"
    },
    {
      "latitude": "-23,5273",
      "longitude": "-46,5968"
    },
    {
      "latitude": "-23,5275",
      "longitude": "-46,6831"
    },
    {
      "latitude": "-23,5256",
      "longitude": "-46,6817"
    },
    {
      "latitude": "-23,586",
      "longitude": "-46,6549"
    },
    {
      "latitude": "-23,7685",
      "longitude": "-46,7174"
    },
    {
      "latitude": "-23,5675",
      "longitude": "-46,5911"
    },
    {
      "latitude": "-23,5076",
      "longitude": "-46,7028"
    },
    {
      "latitude": "-23,5151",
      "longitude": "-46,6419"
    },
    {
      "latitude": "-23,5148",
      "longitude": "-46,6208"
    },
    {
      "latitude": "-23,5196",
      "longitude": "-46,6252"
    },
    {
      "latitude": "-23,5293",
      "longitude": "-46,7429"
    },
    {
      "latitude": "-23,5275",
      "longitude": "-46,7406"
    },
    {
      "latitude": "-23,5991",
      "longitude": "-46,4854"
    },
    {
      "latitude": "-23,5209",
      "longitude": "-46,6681"
    },
    {
      "latitude": "-23,6446",
      "longitude": "-46,7298"
    },
    {
      "latitude": "-23,4942",
      "longitude": "-46,42"
    },
    {
      "latitude": "-23,5868",
      "longitude": "-46,6914"
    },
    {
      "latitude": "-23,5953",
      "longitude": "-46,6929"
    },
    {
      "latitude": "-23,5307",
      "longitude": "-46,4483"
    },
    {
      "latitude": "-23,5296",
      "longitude": "-46,4476"
    },
    {
      "latitude": "-23,6114",
      "longitude": "-46,6451"
    },
    {
      "latitude": "-23,6445",
      "longitude": "-46,7262"
    },
    {
      "latitude": "-23,5977",
      "longitude": "-46,4448"
    },
    {
      "latitude": "-23,607",
      "longitude": "-46,6377"
    },
    {
      "latitude": "-23,5538",
      "longitude": "-46,4895"
    },
    {
      "latitude": "-23,6638",
      "longitude": "-46,6785"
    },
    {
      "latitude": "-23,6652",
      "longitude": "-46,6783"
    },
    {
      "latitude": "-23,6642",
      "longitude": "-46,6784"
    },
    {
      "latitude": "-23,6656",
      "longitude": "-46,727"
    },
    {
      "latitude": "-23,6653",
      "longitude": "-46,7269"
    },
    {
      "latitude": "-23,5144",
      "longitude": "-46,535"
    },
    {
      "latitude": "-23,5148",
      "longitude": "-46,6989"
    },
    {
      "latitude": "-23,5245",
      "longitude": "-46,7433"
    },
    {
      "latitude": "-23,509",
      "longitude": "-46,6896"
    },
    {
      "latitude": "-23,664",
      "longitude": "-46,77"
    },
    {
      "latitude": "-23,5954",
      "longitude": "-46,6212"
    },
    {
      "latitude": "-23,5927",
      "longitude": "-46,6209"
    },
    {
      "latitude": "-23,5876",
      "longitude": "-46,5933"
    },
    {
      "latitude": "-23,5868",
      "longitude": "-46,6936"
    },
    {
      "latitude": "-23,736",
      "longitude": "-46,6947"
    },
    {
      "latitude": "-23,7552",
      "longitude": "-46,6791"
    },
    {
      "latitude": "-23,5189",
      "longitude": "-46,5123"
    },
    {
      "latitude": "-23,546",
      "longitude": "-46,7136"
    },
    {
      "latitude": "-23,6304",
      "longitude": "-46,7141"
    },
    {
      "latitude": "-23,6732",
      "longitude": "-46,701"
    },
    {
      "latitude": "-23,5878",
      "longitude": "-46,6905"
    },
    {
      "latitude": "-23,6816",
      "longitude": "-46,6938"
    },
    {
      "latitude": "-23,6065",
      "longitude": "-46,697"
    },
    {
      "latitude": "-23,5228",
      "longitude": "-46,7741"
    },
    {
      "latitude": "-23,545",
      "longitude": "-46,7335"
    },
    {
      "latitude": "-23,6446",
      "longitude": "-46,7256"
    },
    {
      "latitude": "-23,6842",
      "longitude": "-46,6917"
    },
    {
      "latitude": "-23,6056",
      "longitude": "-46,696"
    },
    {
      "latitude": "-23,5354",
      "longitude": "-46,583"
    },
    {
      "latitude": "-23,5359",
      "longitude": "-46,5526"
    },
    {
      "latitude": "-23,5199",
      "longitude": "-46,6304"
    },
    {
      "latitude": "-23,5132",
      "longitude": "-46,6506"
    },
    {
      "latitude": "-23,692",
      "longitude": "-46,7146"
    },
    {
      "latitude": "-23,7032",
      "longitude": "-46,7147"
    },
    {
      "latitude": "-23,544",
      "longitude": "-46,5311"
    },
    {
      "latitude": "-23,548",
      "longitude": "-46,5261"
    },
    {
      "latitude": "-23,5395",
      "longitude": "-46,5425"
    },
    {
      "latitude": "-23,5419",
      "longitude": "-46,5353"
    },
    {
      "latitude": "-23,5552",
      "longitude": "-46,5169"
    },
    {
      "latitude": "-23,5819",
      "longitude": "-46,4905"
    },
    {
      "latitude": "-23,5039",
      "longitude": "-46,6848"
    },
    {
      "latitude": "-23,544",
      "longitude": "-46,5936"
    },
    {
      "latitude": "-23,5478",
      "longitude": "-46,6025"
    },
    {
      "latitude": "-23,5221",
      "longitude": "-46,4754"
    },
    {
      "latitude": "-23,5399",
      "longitude": "-46,4849"
    },
    {
      "latitude": "-23,5145",
      "longitude": "-46,726"
    },
    {
      "latitude": "-23,5691",
      "longitude": "-46,6493"
    },
    {
      "latitude": "-23,5647",
      "longitude": "-46,6547"
    },
    {
      "latitude": "-23,5344",
      "longitude": "-46,649"
    },
    {
      "latitude": "-23,5316",
      "longitude": "-46,6447"
    },
    {
      "latitude": "-23,5333",
      "longitude": "-46,6473"
    },
    {
      "latitude": "-23,5665",
      "longitude": "-46,663"
    },
    {
      "latitude": "-23,6091",
      "longitude": "-46,6643"
    },
    {
      "latitude": "-23,5984",
      "longitude": "-46,6609"
    },
    {
      "latitude": "-23,5348",
      "longitude": "-46,6464"
    },
    {
      "latitude": "-23,6011",
      "longitude": "-46,6541"
    },
    {
      "latitude": "-23,6085",
      "longitude": "-46,6623"
    },
    {
      "latitude": "-23,6074",
      "longitude": "-46,6628"
    },
    {
      "latitude": "-23,4413",
      "longitude": "-46,5829"
    },
    {
      "latitude": "-23,5681",
      "longitude": "-46,6553"
    },
    {
      "latitude": "-23,5322",
      "longitude": "-46,6443"
    },
    {
      "latitude": "-23,5348",
      "longitude": "-46,6474"
    },
    {
      "latitude": "-23,4641",
      "longitude": "-46,7567"
    },
    {
      "latitude": "-23,5472",
      "longitude": "-46,5219"
    }
  ]

  let list = []
  geoconding.map(element => {
    
    let obj = {
        latitude: element.latitude.replace(',','.'),
        longitude: element.longitude.replace(',', '.')
    }

    list.push(obj)
  })

  let valor = JSON.stringify(list) 
  fs.writeFileSync('./arquivo.json', valor)