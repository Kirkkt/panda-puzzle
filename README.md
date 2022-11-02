# Motivation

I recently bought a "panda puzzle" - a simple toy from [here](https://de.aliexpress.com/item/1005003228092654.html?spm=a2g0o.detail.1000014.2.cbc513e19nwkMe&gps-id=pcDetailBottomMoreOtherSeller&scm=1007.40050.281175.0&scm_id=1007.40050.281175.0&scm-url=1007.40050.281175.0&pvid=1feadf45-d1ab-4511-b27a-3b088778a738&_t=gps-id:pcDetailBottomMoreOtherSeller,scm-url:1007.40050.281175.0,pvid:1feadf45-d1ab-4511-b27a-3b088778a738,tpp_buckets:668%232846%238109%231935&pdp_ext_f=%7B%22sku_id%22%3A%2212000024785831147%22%2C%22sceneId%22%3A%2230050%22%7D&pdp_npi=2%40dis%21EUR%215.98%212.93%21%21%21%21%21%400b0a24a616674191679631292e4a0c%2112000024785831147%21rec).

I find it to be quite fun but the puzzle pieces don't move very smoothly. So I wrote a node.js program in order to play it in the command line.

# How to run it?
Just do:

- `node index.js`

The puzzle board is initially shuffled randomly. You mission is to move the pieces so that the board matches the "sorted" board on the right hand side.

You can use either `HJKL` or `ASDW` to move one piece at a time - you'll get how it works pretty quickly.

And when you've solved the puzzle, the program congratulates you and terminates.
