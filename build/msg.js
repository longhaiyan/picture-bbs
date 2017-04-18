var chalk = require('chalk')

function msg(content, name){

  if( 0 ){
    console.log( content.toString()+" >", content );
  }else{

    if( name ){
      console.log( `${chalk.yellow(name)} >`, content )
    }else{
      console.log( " >", content )
    }

  }

}

exports.msg = msg
