const classifySurgery = (data) => {
  const classify = {
    MKioskTy1: {
      name: '[재관류중재술] 심근경색',
      category: 'adult',
      bodyPart: 'chest',
    },
    MKioskTy2: {
      name: '[재관류중재술] 뇌경색',
      category: 'adult',
      bodyPart: 'head',
    },
    MKioskTy3: {
      name: '[뇌출혈수술] 거미막하출혈',
      category: 'adult',
      bodyPart: 'head',
    },
    MKioskTy4: {
      name: '[뇌출혈수술] 거미막하출혈 외',
      category: 'adult',
      bodyPart: 'head',
    },
    MKioskTy5: {
      name: '[대동맥응급] 흉부',
      category: 'adult',
      bodyPart: 'chest',
    },
    MKioskTy6: {
      name: '[대동맥응급] 복부',
      category: 'adult',
      bodyPart: 'stomach',
    },
    MKioskTy7: {
      name: '[담낭담관질환] 담낭질환',
      category: 'adult',
      bodyPart: 'stomach',
    },
    MKioskTy8: {
      name: '[담낭담관질환] 담도포함질환',
      category: 'adult',
      bodyPart: 'stomach',
    },
    MKioskTy9: {
      name: '[복부응급수술] 비외상',
      category: 'adult',
      bodyPart: 'stomach',
    },
    MKioskTy10: {
      name: '[장중첩/폐색] 영유아',
      category: 'kid',
      bodyPart: 'stomach',
    },
    // MKioskTy10Msg: {name: '장중첩/폐색(영유아) 가능연령', category: '', bodyPart: ''},
    MKioskTy11: {
      name: '[응급내시경] 성인 위장관',
      category: 'adult',
      bodyPart: 'stomach',
    },
    MKioskTy12: {
      name: '[응급내시경] 영유아 위장관',
      category: 'kid',
      bodyPart: 'stomach',
    },
    // MKioskTy12Msg: {name: '위장관 응급내시경(영유아) 가능연령', category: '', bodyPart: ''},
    MKioskTy13: {
      name: '[응급내시경] 성인 기관지',
      category: 'adult',
      bodyPart: 'chest',
    },
    MKioskTy14: {
      name: '[응급내시경] 영유아 기관지',
      category: 'kid',
      bodyPart: 'chest',
    },
    // MKioskTy14Msg: {name: '기관지 응급내시경(영유아) 가능연령', category: '', bodyPart: ''},
    MKioskTy15: { name: '[저출생체중아] 집중치료', category: 'etc' },
    // MKioskTy15Msg: {name: '저출생 체중아 가능연령', category: '', bodyPart: ''},
    MKioskTy16: {
      name: '[산부인과응급] 분만',
      category: 'adult',
      bodyPart: 'stomach',
    },
    MKioskTy17: {
      name: '[산부인과응급] 산과수술',
      category: 'adult',
      bodyPart: 'stomach',
    },
    MKioskTy18: {
      name: '[산부인과응급] 부인과수술',
      category: 'adult',
      bodyPart: 'stomach',
    },
    MKioskTy19: { name: '[중증화상] 전문치료', category: 'etc' },
    MKioskTy20: {
      name: '[사지접합] 수족지접합',
      category: 'adult',
      bodyPart: 'limbs',
    },
    MKioskTy21: {
      name: '[사지접합] 수족지접합 외',
      category: 'adult',
      bodyPart: 'limbs',
    },
    MKioskTy22: {
      name: '[응급투석] HD',
      category: 'adult',
      bodyPart: 'stomach',
    },
    MKioskTy23: {
      name: '[응급투석] CRRT',
      category: 'adult',
      bodyPart: 'stomach',
    },
    MKioskTy24: { name: '[정신과적응급] 폐쇄병동입원', category: 'etc' },
    MKioskTy25: {
      name: '[안과적수술] 응급',
      category: 'adult',
      bodyPart: 'head',
    },
    MKioskTy26: { name: '[영상의학혈관중재] 성인', category: 'etc' },
    MKioskTy27: { name: '[영상의학혈관중재] 영유아', category: 'etc' },
    // MKioskTy27Msg: {name: '영상의학 혈관 중재적 시술(영유아) 가능연령', bodyPart: ''},
  };

  const rst = {
    adult: {
      head: [],
      chest: [],
      stomach: [],
      limbs: [],
    },
    kid: {
      chest: [],
      stomach: [],
    },
    etc: [],
  };

  Object.entries(data)
    .filter((item) => {
      // 수술 가능한 것만 추려냄
      const [dataName, dataValue] = item;

      return dataValue !== '정보미제공';
    })
    .forEach((item) => {
      // 수술명으로 변환 및 분류
      const [dataName, dataValue] = item;

      if (!classify[dataName]) return; // hpid랑 메시지는 걸러냄

      const { name, category, bodyPart } = classify[dataName];

      if (category === 'etc') return rst[category].push(name);

      return rst[category][bodyPart].push(name);
    });

  return rst;
};

export { classifySurgery };
