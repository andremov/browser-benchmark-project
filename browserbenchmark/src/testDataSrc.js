import React from "react";
import {Start} from "./Components/Start";
import {End} from "./Components/End";

export const testDB = [
    // START
    {
        name : '',
        comp : <Start />,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : true,
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
            doCat : true,
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
            doCat : true,
            doMulti : false
        }
    },
    {
        name : 'Cat + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg',
            doClip : false,
            doCat : true,
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
            doCat : true,
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
            doCat : true,
            doMulti : false
        }
    },
    {
        name : 'Cat + Rotate + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate bkg',
            doClip : false,
            doCat : true,
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
            doCat : true,
            doMulti : false
        }
    },
    {
        name : 'Cat + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale bkg',
            doClip : false,
            doCat : true,
            doMulti : false
        }
    },

    {
        name : 'Cat + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg',
            doClip : false,
            doCat : true,
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
            doCat : true,
            doMulti : false
        }
    },
    {
        name : 'Cat + Rotate + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg rotate scale',
            doClip : false,
            doCat : true,
            doMulti : false
        }
    },
    {
        name : 'Cat + Rotate + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate',
            doClip : false,
            doCat : true,
            doMulti : false
        }
    },
    {
        name : 'Cat + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg  scale',
            doClip : false,
            doCat : true,
            doMulti : false
        }
    },

    // TETRIPLES
    {
        name : 'Cat + Rotate + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate scale',
            doClip : false,
            doCat : true,
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
            doCat : true,
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
            doCat : true,
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
            doCat : true,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg',
            doClip : true,
            doCat : true,
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
            doCat : true,
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
            doCat : true,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Rotate + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate bkg',
            doClip : true,
            doCat : true,
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
            doCat : true,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale bkg',
            doClip : true,
            doCat : true,
            doMulti : false
        }
    },

    {
        name : 'Clip + Cat + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg',
            doClip : true,
            doCat : true,
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
            doCat : true,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Rotate + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg rotate scale',
            doClip : true,
            doCat : true,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Rotate + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate',
            doClip : true,
            doCat : true,
            doMulti : false
        }
    },
    {
        name : 'Clip + Cat + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg  scale',
            doClip : true,
            doCat : true,
            doMulti : false
        }
    },

    // TETRIPLES
    {
        name : 'Clip + Cat + Rotate + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate scale',
            doClip : true,
            doCat : true,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : false,
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
            doCat : true,
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
            doCat : true,
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
            doCat : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Cat + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg',
            doClip : false,
            doCat : true,
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
            doCat : true,
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
            doCat : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Cat + Rotate + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate bkg',
            doClip : false,
            doCat : true,
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
            doCat : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Cat + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale bkg',
            doClip : false,
            doCat : true,
            doMulti : true
        }
    },

    {
        name : 'Multi + Cat + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg',
            doClip : false,
            doCat : true,
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
            doCat : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Cat + Rotate + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg rotate scale',
            doClip : false,
            doCat : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Cat + Rotate + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate',
            doClip : false,
            doCat : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Cat + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg  scale',
            doClip : false,
            doCat : true,
            doMulti : true
        }
    },

    // TETRIPLES
    {
        name : 'Multi + Cat + Rotate + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate scale',
            doClip : false,
            doCat : true,
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
            doCat : true,
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
            doCat : true,
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
            doCat : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Cat + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg',
            doClip : true,
            doCat : true,
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
            doCat : true,
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
            doCat : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Cat + Rotate + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' rotate bkg',
            doClip : true,
            doCat : true,
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
            doCat : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Cat + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' scale bkg',
            doClip : true,
            doCat : true,
            doMulti : true
        }
    },

    {
        name : 'Multi + Clip + Cat + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg',
            doClip : true,
            doCat : true,
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
            doCat : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Cat + Rotate + Scale + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' ',
            testStringInner : ' bkg rotate scale',
            doClip : true,
            doCat : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Cat + Rotate + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate',
            doClip : true,
            doCat : true,
            doMulti : true
        }
    },
    {
        name : 'Multi + Clip + Cat + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg  scale',
            doClip : true,
            doCat : true,
            doMulti : true
        }
    },

    // TETRIPLES
    {
        name : 'Multi + Clip + Cat + Rotate + Scale + Shadow + Background Test',
        isTest : true,
        timed : true,
        titled : true,
        testData : {
            testStringOuter : ' shadow',
            testStringInner : ' bkg rotate scale',
            doClip : true,
            doCat : true,
            doMulti : true
        }
    },


    // END
    {
        name: '',
        comp: <End/>,
        timed: false,
        titled: false,
        isTest : false
    }
];