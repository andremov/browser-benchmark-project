
export const testDB = [
    // START
    {
        name : '',
        last : false,
        timed : false,
        titled : false,
        isTest : false
    },

    // SINGLES
    {
        name : 'Rotate Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' ',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },

    // DOUBLES
    {
        name : 'Rotate + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Rotate + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate ',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Rotate + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate bkg',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },

    {
        name : 'Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale bkg',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },

    {
        name : 'Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },

    // TRIPLES
    {
        name : 'Rotate + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Rotate + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg rotate scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Rotate + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg  scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },

    // TETRIPLES
    {
        name : 'Rotate + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },

    // CLIPPED
    // SINGLES
    {
        name : 'Clip + Rotate Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' ',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },

    // DOUBLES
    {
        name : 'Clip + Rotate + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Rotate + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate ',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Rotate + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate bkg',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },

    {
        name : 'Clip + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale bkg',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },

    {
        name : 'Clip + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },

    // TRIPLES
    {
        name : 'Clip + Rotate + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Rotate + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg rotate scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Rotate + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg  scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },

    // TETRIPLES
    {
        name : 'Clip + Rotate + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : false
        }
    },

    // CATTO
    // SINGLES
    {
        name : 'Cat + Rotate Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Cat + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Cat + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' ',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },

    // DOUBLES
    {
        name : 'Cat + Rotate + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate scale',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Cat + Rotate + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate ',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },

    {
        name : 'Cat + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' scale',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },

    // TRIPLES
    {
        name : 'Cat + Rotate + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate scale',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },

    // CATTO + CLIP
    // SINGLES
    {
        name : 'Clip + Cat + Rotate Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' ',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },

    // DOUBLES
    {
        name : 'Clip + Cat + Rotate + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate scale',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Rotate + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate ',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' scale',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },


    // TRIPLES
    {
        name : 'Clip + Cat + Rotate + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate scale',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : false
        }
    },


    // MULTI
    // SINGLES
    {
        name : 'Multi + Rotate Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' ',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },

    // DOUBLES
    {
        name : 'Multi + Rotate + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Rotate + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate ',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Rotate + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate bkg',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },

    {
        name : 'Multi + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale bkg',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },

    {
        name : 'Multi + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },

    // TRIPLES
    {
        name : 'Multi + Rotate + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Rotate + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg rotate scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Rotate + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg  scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },

    // TETRIPLES
    {
        name : 'Multi + Rotate + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate scale',
            doClip : false,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },

    // CLIPPED
    // SINGLES
    {
        name : 'Multi + Clip + Rotate Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' ',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },

    // DOUBLES
    {
        name : 'Multi + Clip + Rotate + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Rotate + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate ',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Rotate + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate bkg',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },

    {
        name : 'Multi + Clip + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale bkg',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },

    {
        name : 'Multi + Clip + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },

    // TRIPLES
    {
        name : 'Multi + Clip + Rotate + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Rotate + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg rotate scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Rotate + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg  scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },

    // TETRIPLES
    {
        name : 'Multi + Clip + Rotate + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate scale',
            doClip : true,
            doCat : false, doFilter : false,
            doMulti : true
        }
    },

    // CATTO
    // SINGLES
    {
        name : 'Multi + Cat + Rotate Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Cat + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Cat + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' ',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },

    // DOUBLES
    {
        name : 'Multi + Cat + Rotate + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate scale',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Cat + Rotate + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate ',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },

    {
        name : 'Multi + Cat + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' scale',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },
    
    // TRIPLES
    {
        name : 'Multi + Cat + Rotate + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate scale',
            doClip : false,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },
    // CATTO + CLIP
    // SINGLES
    {
        name : 'Multi + Clip + Cat + Rotate Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Cat + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Cat + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' ',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },
    
    // DOUBLES
    {
        name : 'Multi + Clip + Cat + Rotate + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate scale',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Cat + Rotate + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate ',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },

    {
        name : 'Multi + Clip + Cat + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' scale',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },

    // TRIPLES
    {
        name : 'Multi + Clip + Cat + Rotate + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate scale',
            doClip : true,
            doCat : true, doFilter : false,
            doMulti : true
        }
    },



    // CATTO
    // SINGLES
    {
        name : 'Cat + Rotate Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate filter',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },
    {
        name : 'Cat + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale filter',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },
    {
        name : 'Cat + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' filter ',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },

    // DOUBLES
    {
        name : 'Cat + Rotate + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate scale filter',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },
    {
        name : 'Cat + Rotate + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate filter ',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },

    {
        name : 'Cat + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' scale filter',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },

    // TRIPLES
    {
        name : 'Cat + Rotate + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate scale filter',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },

    // CATTO + CLIP
    // SINGLES
    {
        name : 'Clip + Cat + Rotate Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate filter',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale filter',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow filter',
            testStringInner : ' ',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },

    // DOUBLES
    {
        name : 'Clip + Cat + Rotate + Scale Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate scale filter',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Rotate + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate  filter',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' scale filter',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },


    // TRIPLES
    {
        name : 'Clip + Cat + Rotate + Scale + Shadow Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate scale filter',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : false
        }
    },



    // CATTO
    // SINGLES
    {
        name : 'Multi + Cat + Rotate + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate filter',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Cat + Scale + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale filter',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Cat + Shadow + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : '  filter',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },

    // DOUBLES
    {
        name : 'Multi + Cat + Rotate + Scale + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate scale filter',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Cat + Rotate + Shadow + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate filter ',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },

    {
        name : 'Multi + Cat + Scale + Shadow + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' scale filter',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },

    // TRIPLES
    {
        name : 'Multi + Cat + Rotate + Scale + Shadow + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate scale filter',
            doClip : false,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },
    // CATTO + CLIP
    // SINGLES
    {
        name : 'Multi + Clip + Cat + Rotate + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate filter',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Cat + Scale + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale filter',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Cat + Shadow + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow ',
            testStringInner : ' filter',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },

    // DOUBLES
    {
        name : 'Multi + Clip + Cat + Rotate + Scale + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate scale filter',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Cat + Rotate + Shadow + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate filter ',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },

    {
        name : 'Multi + Clip + Cat + Scale + Shadow + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' scale filter',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },

    // TRIPLES
    {
        name : 'Multi + Clip + Cat + Rotate + Scale + Shadow + Filter Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' rotate scale filter',
            doClip : true,
            doCat : true, doFilter : true,
            doMulti : true
        }
    },



    // END
    {
        name: '',
        last: true,
        timed: false,
        titled: false,
        isTest : false
    }
];