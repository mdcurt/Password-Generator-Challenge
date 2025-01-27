const passwordGuts = {
finalSet : this.alphaSet,
charCount: 0,
alphaSet : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
capSet : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
numSet : ['0','1','2','3','4','5','6','7','8','9'],
charSet : ['!', '@','#','$','%','?'],
pusher: function pusher(arrayAddendum)
{
  this.finalSet = this.finalSet.concat(arrayAddendum);
},
passwordGenerator: function()
{
  for (let i = 0; i < this.charCount.length; i++)
  return this.finalSet.Math.random(this.charCount)
}


}

const submitted = document.getElementById('generatePassword');
generatePassword.addEventListener('click', passwordGuts.passwordGenerator());