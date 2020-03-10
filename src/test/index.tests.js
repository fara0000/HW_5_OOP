describe('HW5_LinkedList_OOP', function() {
    describe('LinkedList.init', function() {

        it('LinkedList init should be defined', function() {
            const lList = new LinkedList();
            assert.isDefined(lList.init, 'function has been defined')
        });

        it('init array [1, 2, 3]', function() {
            const lList = new LinkedList();
            const array = [1, 2, 3];
            const arrayLength = 3;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array [1, 2]', function() {
            const lList = new LinkedList();
            const array = [1, 2];
            const arrayLength = 2;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array [1]', function() {
            const lList = new LinkedList();
            const array = [1];
            const arrayLength = 1;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array []', function() {
            const lList = new LinkedList();
            const array = [];
            const arrayLength = 0;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array [\'javascript\']', function() {
            const lList = new LinkedList();
            const array = ['javascript'];
            const arrayLength = 1;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array [undefined]', function() {
            const lList = new LinkedList();
            const array = [undefined];
            const arrayLength = 1;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array [null]', function() {
            const lList = new LinkedList();
            const array = [null];
            const arrayLength = 1;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array undefined', function() {
            const lList = new LinkedList();
            const array = undefined;
            const arrayLength = 0;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });

        it('init array null', function() {
            const lList = new LinkedList();
            const array = null;
            const arrayLength = 0;
            lList.init(array);

            assert.deepEqual(lList.getSizeOfList(), arrayLength);
        });
    });

    describe('LinkedList.addElmAtStart', function() {
        const lList = new LinkedList();

        it('should be defined',function() {
            assert.isDefined(lList.addElmAtStart, 'function has been defined')
        })
        it('should return [5, 2, 3, 4]', function() {
            const lList = new LinkedList();
            const array = [2, 3, 4];
            const element = 5;
            const expectedArray = [5, 2, 3, 4]
            const expectedLength = 4;
            lList.init(array);

            const actual = lList.addElmAtStart(element);

            assert.deepEqual(actual, expectedLength);
            assert.deepEqual(lList.toArray(), expectedArray)
        })
        it('should return [ 2, 3, 4]', function() {
            const lList = new LinkedList();
            const array = [3, 4];
            const element = 2;
            const expectedArray = [2, 3, 4]
            const expectedLength = 3;
            lList.init(array);

            const actual = lList.addElmAtStart(element);

            assert.deepEqual(actual, expectedLength);
            assert.deepEqual(lList.toArray(), expectedArray)
        })
        it('should return [ 0, 3, 4]', function() {
            const lList = new LinkedList();
            const array = [3, 4];
            const element = 0;
            const expectedArray = [0, 3, 4]
            const expectedLength = 3;
            lList.init(array);

            const actual = lList.addElmAtStart(element);

            assert.deepEqual(actual, expectedLength);
            assert.deepEqual(lList.toArray(), expectedArray)
        })
        it('should return [PHP , 3, 4]', function() {
            const lList = new LinkedList();
            const array = [3, 4];
            const element = 'PHP';
            const expectedArray = ['PHP', 3, 4]
            const expectedLength = 3;
            lList.init(array);

            const actual = lList.addElmAtStart(element);

            assert.deepEqual(actual, expectedLength);
            assert.deepEqual(lList.toArray(), expectedArray)
        })
        it('should return [ undefined, 4]', function() {
            const lList = new LinkedList();
            const array = [4];
            const element = undefined;
            const expectedArray = [undefined, 4]
            const expectedLength = 2;
            lList.init(array);

            const actual = lList.addElmAtStart(element);

            assert.deepEqual(actual, expectedLength);
            assert.deepEqual(lList.toArray(), expectedArray)
        })
        it('should return [ null, 4]', function() {
            const lList = new LinkedList();
            const array = [4];
            const element = null;
            const expectedArray = [null, 4]
            const expectedLength = 2;
            lList.init(array);

            const actual = lList.addElmAtStart(element);

            assert.deepEqual(actual, expectedLength);
            assert.deepEqual(lList.toArray(), expectedArray)
        })
    });
    describe('toArray', function() {
        const lList = new LinkedList();
        it('toArray defined', function() {
            assert.isDefined(lList.toArray, 'function has been defined');
        });
    })

    describe('toString', function() {
        const lList = new LinkedList();
        it('toString defined', function() {
            assert.isDefined(lList.toString, 'function has been defined');
        });
    })

    describe('deleteFirstElm', function() {
        const lList = new LinkedList();
        it('deleteFirstElm defined', function() {
            assert.isDefined(lList.deleteFirstElm, 'function has been defined');
        });
    })

    describe('addElmAtEnd', function() {
        const lList = new LinkedList();
        it('addElmAtEnd defined', function() {
            assert.isDefined(lList.addElmAtEnd, 'function has been defined');
        });

        it('should return [5, 2, 3, 4]', function() {
            const lList = new LinkedList();
            const array = [2, 3, 4];
            const element = 5;
            const expectedArray = [ 2, 3, 4, 5 ] 
            const expectedLength = 4;
            lList.init(array);

            const actual = lList.addElmAtEnd(element);

            assert.deepEqual(lList.getSizeOfList(), expectedLength);
            assert.deepEqual(lList.toArray(), expectedArray)
        });
    });


    describe('deleteLastElm', function() {
        const lList = new LinkedList();
        it('deleteLastElm defined', function() {
            assert.isDefined(lList.deleteLastElm, 'function has been defined');
        });
    })

    describe('getSizeOfList', function() {
        const lList = new LinkedList();
        it('getSizeOfList defined', function() {
            assert.isDefined(lList.getSizeOfList, 'function has been defined');
        });

        // it('getSizeOfList works correctly',function() {
        //     let ll = new LinkedList();
        //     let array = [4];
        //     ll.init(array);
        //     const expected = 1;

        //     ll.getListSize;

        //     assert.deepEqual(getSizeOfList, expected);
        // })
    })
});