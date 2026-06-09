// Reproduz a lógica financeira do app
const MP_FEE = 10;
const game = { socialPct:20, housePct:10, odd:2 };
// 3 torcedores no jogo
const bets = [
  {user:'Ana',  athlete:'PC', amount:10},
  {user:'Bia',  athlete:'PC', amount:5},
  {user:'Caio', athlete:'FH', amount:20},
];
bets.forEach(b=>{ b.social=b.amount*game.socialPct/100; b.house=b.amount*game.housePct/100; b.mp=b.amount*MP_FEE/100; });

const pool = bets.reduce((s,b)=>s+b.amount,0);
const prize = pool*(100-game.socialPct-game.housePct-MP_FEE)/100;
const winner='PC';
const winStake = bets.filter(b=>b.athlete===winner).reduce((s,b)=>s+b.amount,0);
bets.forEach(b=> b.payout = b.athlete===winner && winStake ? prize*(b.amount/winStake) : 0);

const social = pool*game.socialPct/100;
const house  = pool*game.housePct/100;
const mp     = pool*MP_FEE/100;
const paid   = bets.reduce((s,b)=>s+b.payout,0);

console.log('Pool total torcida:', pool.toFixed(2));
console.log('Social (20%):', social.toFixed(2));
console.log('Casa (10%):', house.toFixed(2));
console.log('Taxa MP (10%):', mp.toFixed(2));
console.log('Prêmio a ratear (60%):', prize.toFixed(2));
console.log('Pago aos vencedores:', paid.toFixed(2));
bets.filter(b=>b.athlete===winner).forEach(b=>console.log('  ',b.user,'torceu',b.amount,'recebe',b.payout.toFixed(2)));
console.log('--- Conferência: social+casa+mp+pago =', (social+house+mp+paid).toFixed(2),'(deve = pool', pool.toFixed(2)+')');
console.log('Balanço fecha?', Math.abs((social+house+mp+paid)-pool)<0.001 ? 'SIM ✓':'NÃO ✗');
