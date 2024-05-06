function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getB(n) {
  const b = [];

  for (let i = 0; i < n; i++) {
    if ((i + 1) % 2 == 0) {
      b.push(23 / (i + 1));
    } else {
      b.push(23 / Math.pow(i + 1, 2));
    }
  }

  return b;
}

function getC(n) {
  const c = [];

  for (let i = 0; i < n; i++) {
    c.push([]);
    for (let j = 0; j < n; j++) {
      c[i].push(23 / Math.pow(3 * (i + 1) + (j + 1), 2));
    }
  }

  return c;
}

function getRandomVector(n) {
  const v = [];

  for (let i = 0; i < n; i++) {
    v.push(getRandomInt(201));
  }

  return v;
}

function getRandomMatrix(n) {
  const a = [];

  for (let i = 0; i < n; i++) {
    a.push([]);
    for (let j = 0; j < n; j++) {
      a[i].push(getRandomInt(201));
    }
  }

  return a;
}

//////////////////////////////

function multiplyMatrixByVector(m, v) {
  const res = [];

  for (let i = 0; i < v.length; i++) {
    let sum = 0;

    for (let j = 0; j < v.length; j++) {
      sum += m[i][j] * v[j];
    }

    res.push(sum);
  }

  return res;
}

function multiplyMatrixByNumber(m, k) {
  const res = [];

  for (let i = 0; i < m.length; i++) {
    res.push([]);
    for (let j = 0; j < m[i].length; j++) {
      res[i].push(m[i][j] * k);
    }
  }

  return res;
}

function addMatrixes(m1, m2) {
  const res = [];

  for (let i = 0; i < m1.length; i++) {
    res.push([]);
    for (let j = 0; j < m1[i].length; j++) {
      res[i].push(m1[i][j] + m2[i][j]);
    }
  }

  return res;
}

function subtractMatrixes(m1, m2) {
  const res = [];

  for (let i = 0; i < m1.length; i++) {
    res.push([]);
    for (let j = 0; j < m1[i].length; j++) {
      res[i].push(m1[i][j] - m2[i][j]);
    }
  }

  return res;
}

function multiplyMatrixes(m1, m2) {
  const res = [];

  for (let k = 0; k < m1.length; k++) {
    res.push([]);
    for (let i = 0; i < m1[k].length; i++) {
      let sum = 0;

      for (let j = 0; j < m1[k].length; j++) {
        sum += m1[k][j] * m2[j][i];
      }

      res[k].push(sum);
    }
  }

  return res;
}

function addVectors(v1, v2) {
  const res = [];

  for (let i = 0; i < v1.length; i++) {
    res.push(v1[i] + v2[i]);
  }

  return res;
}

function multiplyVectors(v1, v2) {
  const res = [];

  for (let i = 0; i < v1.length; i++) {
    res.push([]);
    for (let j = 0; j < v2.length; j++) {
      res[i].push(v1[i] * v2[j]);
    }
  }

  return res;
}

function showMatrix(m, alias) {
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m.length; j++) {
      console.log(`${alias}[${i + 1}][${j + 1}] = ${m[i][j]}`);
    }
  }
}

function showVector(v, alias) {
  for (let i = 0; i < v.length; i++) {
    console.log(`${alias}[${i + 1}] = ${v[i]}`);
  }
}

module.exports = {
  getB,
  getC,
  getRandomInt,
  getRandomVector,
  getRandomMatrix,
  multiplyMatrixByVector,
  multiplyMatrixByNumber,
  addMatrixes,
  subtractMatrixes,
  multiplyMatrixes,
  addVectors,
  multiplyVectors,
  showMatrix,
  showVector,
};
