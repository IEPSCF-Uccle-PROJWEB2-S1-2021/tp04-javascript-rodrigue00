//exercice 1
function Min(a,b)
{
  return Math.min(a,b);
}
let resultMin=Min(15,15);
console.log('le minimum est '+resultMin);



//exercice 2
function Max(a,b)
{
   return Math.max(a,b);
}
let resultMax=Max(30,15);
console.log('le maximum est '+resultMax);



//exercice 3
let myTestNumbers=[5, 8, 13, 21, 34, 610, 55, 3, 89, 144, 233, 377];
function reduce(numbers,fn)
{
  let result=numbers[0];
  for(let i=1;i<numbers.length;i++)
  {
 result = fn(result,numbers[i]);

  }
  return result;
}

function fn(c,d)
{
  return Math.min(c,d);
}
console.log(reduce(myTestNumbers,fn) );

//
function reduce(numbers,fn)
{
  let result=numbers[0];
  for(let i=1;i<numbers.length;i++)
  {
 result = fn(result,numbers[i]);

  }
  return result;
}

function fn(c,d)
{
  return Math.max(c,d);
}
console.log(reduce(myTestNumbers,fn) );




//exercice 4

function filter(numbers,fn)
{
  let result=[], j=0;
  for(let i=0;i<numbers.length;i++)
  {
    if(fn(numbers[i]))
    {
    result[j]=numbers[i];
    j++;
    }
  }
  return result;
}

function fn(c)
{
  return c>=30;
}
console.log(filter(myTestNumbers,fn));