import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import SearchBar from '../component/SearchBar'
import useResults from '../hooks/useResults'
import ResultList from '../component/ResultList'

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMsg] = useResults();

    const filterResultsByPrize = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

   

    return <>

        <SearchBar text={term}
            onTextChange={setTerm}
            onDone={() => searchApi(term)}
        >
        </SearchBar>
        {errorMsg ? <Text>{errorMsg}</Text> : null}

        <ScrollView>
            <ResultList result={filterResultsByPrize('$')} title='Cost Effective'>
            </ResultList>
            <ResultList result={filterResultsByPrize('$$')} title='Bit pricer'>
            </ResultList>
            <ResultList result={filterResultsByPrize('$$$')} title='Big Spender'>
            </ResultList>
        </ScrollView>
    </>
};

const styles = StyleSheet.create({

});
export default SearchScreen